// chatbot.js

function getBotResponse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("hi") || lower.includes("hello")) {
        return "How can i help you today?";
    } else if (lower.includes("good morning") || lower.includes("good afternoon") || lower.includes("good evening")) {
        return "Good day! How can I assist you?";
    } else if (lower.includes("my role") || lower.includes("who am i")) {
        return "You are a user seeking assistance. How can I help you today?";
    }else if (lower === 'exit') {
        return "Goodbye!";
    } else {
        return "I'm sorry, I didn't understand that. Type 'help' for options.";
    }
}

module.exports = { getBotResponse };
