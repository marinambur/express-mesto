const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const {
  PORT = 3000,
} = process.env;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/cards/', cardRouter);
app.use('/users/', userRouter);

app.use((req, res, next) => {
  req.user = {
    _id: '5f4d23769a701c39b4bf78ed'
  };
  next();
});


mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use((req, res) => {
  res
    .status(404)
    .send({message: 'Запрашиваемый ресурс не найден'});
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
