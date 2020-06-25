const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const urlNotFound = (req, res) => {
  if (!res.headersSent) {
    res.status(404).send({
      message: 'Запрашиваемый ресурс не найден',
    });
  }
};

app.use(express.static(path.join(__dirname, 'public')));

app.use('/cards', require('./routes/cards'));

app.use('/users', require('./routes/users'));

app.use((req, res, next) => {
  req.user = {
    _id: '5ef4849f8d7b8e29008fe98b',
  };

  next();
});

app.use(urlNotFound);
app.listen(PORT);
