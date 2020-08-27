//const fs = require('fs').promises;

//const readFile = (file) => fs.readFile(file);

const router = require('express').Router();
//module.exports = {
// readFile
//}
const users = require('./data/users.json');
const cards = require('./data/cards.json');

const express = require('express');
//const path = require('path');
const app = express();
//const usersRouter = require('./routes/users');
//const { usersRouter} = require('./routes/');
// Слушаем 3000 порт
const {PORT = 3000} = process.env;
//app.use('/users', usersRouter);
//app.use('/cards', cardsRouter);
/*app.use((req, res) => {
  res
    .status(40
    .send({ message: 'Ошибка. Ресурс не найден' });
});*/
app.get('/users', (req, res) => {
  res.send(
    //JSON.parse(JSON.stringify(users))
    users.find(element => element._id === '8340d0ec33270a25f2413b69')

//  const usersID = JSON.parse(users).find(user) => user._id ===req.params.id
  );
});


app.get('/users/:id', (req, res) => {
  const {id} = req.params

  return res.send({error: 'Такого пользователя нет'});

});


app.get('/cards', (req, res) => {
  res.send(
    cards
  );
});

app.use(express.static(__dirname + '/public'));
//app.use('/', routes);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
module.exports = router;


