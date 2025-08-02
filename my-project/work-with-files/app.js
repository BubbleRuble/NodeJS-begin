const fs = require("fs/promises");

// const readFile = async () => {
//   const text = await fs.readFile('./files/file.txt', 'utf-8');
//   // const buffer = await fs.readFile('./files/file.txt');
//   // const text = buffer.toString();
//   console.log(text)
// } 

// readFile()

// const addText = async()=> {
//     await fs.appendFile("./files/file.txt", "\nдодаємо в кінець текст");
// }

// addText()


const replaceText = async()=> {
    const result = await fs.writeFile("./files/file.txt", "лох");
    console.log(result);
}

replaceText();

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.mkdir('./files/text/txt').then(res => console.log(res)).catch(error => console.log(error.message))