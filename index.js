const fs =require ('fs');
const text = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(text);
fs.writeFileSync('./txt/output.txt', `This is what we know about the avocado: ${text}.\nCreated on ${Date.now()}`);
