// app.js

const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'You> '
});

console.log("🤖 Welcome to IT Support Chatbot! Type 'exit' to quit.");
rl.prompt();

rl.on('line', (input) => {
    const response = chatbot.getBotResponse(input);
    console.log(`Bot> ${response}`);

    if (input.toLowerCase() === 'exit') {
        rl.close();
    } else {
        rl.prompt();
    }
});
