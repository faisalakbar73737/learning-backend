import fs from 'fs/promises';

// const data = await fs.writeFile('hello.txt', 'Hello, World!');
// console.log('File written successfully');

const read = await fs.readFile('hello.txt', 'utf-8');
console.log(read);

// const append = await fs.appendFile('hello.txt', '\nWelcome to Node.js!');
// console.log('File appended successfully');