const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser')



const app = express();


mongoose.connect(process.env.MONGODB_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
const Model =require('./models/model')

app.get('/api/notice', (req, res) => {
   
  Model.find().sort({ date: -1 })
  .then(model => res.status(200).json(model))
  .catch(error => res.status(400).json({ message : error.message }));
  
});

app.post('/api/notice', (req, res) => {

  const model = new Model({
    author : req.body.author,
    content : req.body.content,
    date : Date.now(),
   
  });

  model.save()
    .then(newNotice => res.status(201).json({newNotice}))
    .catch(error => res.status(400).json({ message : error.message }));
});



module.exports = app;