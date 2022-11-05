const app = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');
const router = express.Router(); //not sure if need this here or in server

// GET Route for retrieving all the feedback
app.get('/', (req, res) => {
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))

});


app.post('/notes', (req, res) => {
  const {title, text} = req.body;
});