//This code is from the solved student project as something to look at
const { request, response } = require('express')
const router = express.Router();
app.use(express.static('public'))
const fs = require('fs')
const express = require('express');
const { rmSync } = require('fs');
const path = require('path');
const api = require('./routes/apiRoute');
const html = require('./routes/htmlRoute');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate t'));


//not sure where this needs to go
app.get('/apiRoute', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html')) // IDK WHAT FILE WE SEND
);

//not sure where this needs to go
app.get('/htmlRoute', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html')) //IDK WHAT FILE WE SEND
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);




// START CLEAN ABOVE THIS

//STEPHEN EXAMPLE

if(request.url === '/' && request.method === 'GET' ){
  response.sendFile('index.html')
};

app.get('/', (req, res) => {res.sendFile('index.html')});

app.get('/api/notes', (req, res) => {fs.readFile('db/db.json', (err, data) => err ? res.status(500).json(err) : res.json(data))})

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
