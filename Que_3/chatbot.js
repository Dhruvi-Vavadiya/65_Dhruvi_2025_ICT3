// chatbot.js

function getBotResponse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("reset password")) {
        return "To reset your password, go to the portal and click on 'Forgot Password'.";
    } else if (lower.includes("internet") || lower.includes("wifi")) {
        return "Please restart your router. If the issue continues, contact IT support.";
    } else if (lower.includes("email")) {
        return "Check your spam folder or verify your email settings.";
    } else if (lower.includes("help")) {
        return "You can ask about password reset, email issues, or internet problems.";
    } else if (lower === 'exit') {
        return "Goodbye!";
    } else {
        return "I'm sorry, I didn't understand that. Type 'help' for options.";
    }
}

module.exports = { getBotResponse };
