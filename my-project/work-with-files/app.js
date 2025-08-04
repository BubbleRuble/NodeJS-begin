// const fs = require("fs/promises");
const books = require('./books');

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case 'read':
      const allBooks = await books.getAll();
      return console.log(allBooks)
    case 'getById':
      const oneBook = await books.getById(id);
      return console.log(oneBook)
    case 'add':
      const newBook = await books.add({title, author});
      return console.log(newBook)
    case 'updateById':
        const updateBook = await books.updateById(id, {title, author});
        return console.log(updateBook)
    case 'deleteById':
        const deleteBook = await books.deleteById(id);
        return console.log(deleteBook)
    default:
        return;
  }
};

// invokeAction({action: 'read'});
// invokeAction({ action: 'getById', id: 'YxhM4QDxPeA3SmPHcEZPJ' });
// invokeAction({
//   action: 'add',
//   title: 'The Special One',
//   author: 'Jose Mourinho',
// });
// invokeAction({
//   action: 'updateById',
//   id: 'YxhM4QDxPeA3SmPHcEZPJ',
//   title: 'The Special One',
//   author: 'Kyryllo Ganin',
// });
// invokeAction({action: 'deleteById', id: 'Z0ZAPmU6QMESN6dV205Tc'})

const actionIndex = process.argv.indexOf('--action');
if (actionIndex !== -1) {
    const action = process.argv[actionIndex +1];
    invokeAction({action})
}


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

// const replaceText = async()=> {
//     const result = await fs.writeFile("./files/file.txt", "лох");
//     console.log(result);
// }

// replaceText();

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.mkdir('./files/text/txt').then(res => console.log(res)).catch(error => console.log(error.message))
