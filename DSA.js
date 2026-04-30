import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (the UI)
app.use(express.static(__dirname));

const ai = new GoogleGenAI({});

// Initialize a global chat session to keep context in memory for the single user demo
const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
        systemInstruction: "You are a top-tier Data Structures and Algorithms mentor guiding students specifically in Java, Python, and C. You will help students understand concepts, solve problems, and optimize code related to DSA ONLY in Java, Python, or C. Always verify or ask which of these 3 languages the student wants to use if they haven't specified. Provide clear, optimized, professional explanations. If the question is not related to DSA, politely inform the user that you can only assist with Data Structures and Algorithms.",
    },
});

app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;

        if (!userMessage) {
            return res.status(400).json({ error: "Message is required" });
        }

        // Sends the message in the existing chat session maintaining multi-turn context
        const response = await chat.sendMessage({ message: userMessage });

        res.json({ reply: response.text });
    } catch (error) {
        console.error("AI Error:", error);

        let errorMessage = "Failed to fetch response";
        if (error.status === 503) {
            errorMessage = "Gemini AI is currently experiencing high demand. Please wait a moment and try again.";
        }
        res.status(500).json({ error: errorMessage });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🤖 Code Mentor UI running at: http://localhost:${PORT}`);
    console.log(`Open the link above in your browser to see the dashboard UI in action.`);
});