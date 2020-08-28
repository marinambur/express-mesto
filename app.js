const express = require('express');

const app = express();
const path = require('path');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const {
  PORT = 3000,
} = process.env;
app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards/', cardRouter);
app.use('/users/', userRouter);
app.use((req, res) => {
  res
    .status(404)
    .send({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
