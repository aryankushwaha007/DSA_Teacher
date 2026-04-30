# 🤖 DSA AI Mentor

A fully interactive, web-based Data Structures and Algorithms (DSA) learning platform powered by **Google's Gemini 2.5 Flash AI**. This platform provides tailored, multi-turn tutoring experiences to help students master complex DSA concepts, specifically targeted for **Java**, **Python**, and **C** developers.

## ✨ Key Features

- **Interactive AI Playground**: Ask questions, debug code, and explore complex topics smoothly through an embedded chat interface that preserves full conversation context.
- **Session History Logging**: Automatically saves your questions and the AI's responses during your session so you can effortlessly review previously covered concepts.
- **Language-Specific Guidance**: The AI is strictly prompted to focus on Data Structures and Algorithms in **Java**, **Python**, and **C** to match industry standards.
- **Quick Action Dashboard**: Dive right into learning with single-click interactive widgets for *Daily Coding Challenges*, *Knowledge Quizzes*, and popular DSA topics.
- **Curated Tutorial Gallery**: Browse structured visual cards covering foundational tracks like Arrays, Linked Lists, Trees/BST, Graphs, Sorting, and Dynamic Programming.
- **Rich Markdown Formatting**: AI-authored explanations and code snippets render cleanly thanks to integrated frontend Markdown parsing (`marked.js`).

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript, FontAwesome, Marked.js
- **Backend Architecture**: Node.js, Express.js
- **Artificial Intelligence**: `@google/genai` (Google Gemini SDK)
- **Tooling & Setup**: `npm`, `dotenv`, `cors`

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0 or higher recommended)
- A valid Google Gemini API Key. You can grab one for free from [Google AI Studio](https://aistudio.google.com/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aryankushwaha007/DSA_Teacher.git
   cd DSA_AI
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a new file named `.env` in the root directory and securely add your API key (this file is ignored by Git to secure your credentials):
   ```env
   GOOGLE_API_KEY=your_actual_api_key_here
   ```

4. **Launch the localized Server:**
   ```bash
   npm run dev
   ```

5. **Access the Dashboard:**
   Open your preferred web browser and navigate directly to:
   [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```text
├── .env                # Secure Environment variables (API Keys)
├── .gitignore          # Rules for excluded Git files
├── DSA.js              # Express server config and core GenAI context bridging
├── index.html          # Frontend Dashboard GUI and logic handler
├── package.json        # Node dependencies and execution scripts
└── README.md           # Core project documentation
```

## 🧠 How to Use

1. Open the frontend running locally in your browser.
2. The **Dashboard** view displays your aggregate statistics and single-click quick-start macros (like daily challenges or quizzes).
3. Switch to the **Playground** via the sidebar to formulate your own queries to the AI tutor. Always try to define your preferred language (Java, Python, or C) if it hasn't been established.
4. Visit the **History** tab mid-session if you find yourself needing to trace back recent questions or verify an earlier code snippet.
5. Utilize the **Tutorials** segment to quickly drop into structured learning paths for specific DSA chapters.

