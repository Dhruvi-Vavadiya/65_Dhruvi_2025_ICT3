global.a = 'This is a global variable';
console.log(a);  
console.log("This is a log message");
console.error("This is an error message");
console.log("Process ID:", process.pid);
console.log("Node.js Version:", process.version);
console.log(__dirname);  
console.log(__filename); 
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

setInterval(() => {
    console.log("This runs every 3 seconds");
}, 3000);
const myURL = new URL('https://www.example.com/?name=anjali');
console.log(myURL.searchParams.get('name'));  
myURL.searchParams.append('age', '30');
console.log(myURL.href);  