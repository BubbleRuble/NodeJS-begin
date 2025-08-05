// const express = require('express');
// const {format} = require('date-fns');
// const fs = require('fs/promises');
// const cors = require('cors');

// const app = express();

// const books = require('./books');

// const booksRouter = require('./routes/api/books')

// app.listen(4000, () => console.log('server running'));

//

// const corsMiddleware = cors();
// app.use(corsMiddleware);

// app.get('/', (request, responce) =>{
//   responce.send('<h1>Відповідь</h1>')
// })

// app.get('/contacts', (request, responce) =>{
//   console.log(request.url)
//   console.log(request.method)
//   responce.send('<h2>Сторінка контактів</h2>')
// })


// FIRST EXAMPLE 

// const books = require('./books');

// app.get('/books', (req, res) => {
//   res.json(books)
// })

// app.listen(4000);

// SECOND EXAMPLE

// app.use( async (req,res,next) => {
//   const {method, url} = req;
//   const date = format(new Date(), 'dd-MM-yyyy-HH:mm:ss');
//   await fs.appendFile('./server.log', `\n${method} ${url} ${date}`)
//   next();
// })

// app.get('/products', (req, res) => {
//   res.json([])
// })

// app.get('/books', (req, res) => {
//   res.json(books)
// })

// app.use((req, res) => {
//   res.status(404).json({
//     message: '404 Error Not Found'
//   })
// })

//THIRD EXAMPLE взаємодія з фронтом 

const express = require("express");
const cors = require("cors");

const booksRouter = require('./routes/api/books')

const app = express();

app.use(cors());

app.use("/api/books", booksRouter);

app.listen(4000);


