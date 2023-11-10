// import express from 'express';
// import path, { join } from 'path';

// const app = express();
// const port = 8000;


// const staticPath = path.join(__dirname, "../public");
// app.set("view engine", "hbs");
// app.use(express.static(staticPath));


// app.get('/', (req, res) => {
//     res.render("index");
// });


// app.listen(port, ()=>{
// console.log(`Listening to the port ${port}`)
// })


// import express from 'express';
// import path, { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// const port = 8000;

// const staticPath = path.join(__dirname, "../public");
// app.set("view engine", "hbs");
// app.use(express.static(staticPath));

// app.get('/', (req, res) => {
//     res.render("index");
// });

// app.listen(port, () => {
//     console.log(`Listening to the port ${port}`);
// });


const express= require("express");
const path= require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.use(express.static(staticPath));


app.get('/', (req, res) => {
    res.render("index");
});


app.listen(port, ()=>{
console.log(`Listening to the port ${port}`)
})