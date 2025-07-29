const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'You> '
});
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
