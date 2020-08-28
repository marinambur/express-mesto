/*const fs = require('fs').promises;
const path = require('path');
const readFile = (file) => fs.readFile(file);

const router = require('express').Router();
module.exports = {
readFile
}
const users = require('./data/users.json');
const cards = require('./data/cards.json');

const express = require('express');
//const path = require('path');
const app = express();
const usersRouter = require('./routes/users');
//const { usersRouter} = require('./routes/');
// Слушаем 3000 порт
const {PORT = 3000} = process.env;*/


const express = require('express');

const path = require('path');

const app = express();
const users = require('./data/users.json');
const cards = require('./data/cards.json');
const { usersRouter} = require('./routes/users');

const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
//app.use('/cards', cardsRouter);
/*app.use((req, res) => {
  res
    .status(40
    .send({ message: 'Ошибка. Ресурс не найден' });
});*/

/*app.get('/users', (req, res) => {
  res.send(
    users
  );
});*/

app.get('/users/:id', (req, res) => {
  const {id} = req.params
  if (!users[req.params.id]) {
    res.send(
      users.find(element => element._id === id)
    ); }
  else {

    res.send(`Такого пользователя не существует`);

  }

});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    console.log(!id)
    res.send(`Такого пользователя не существует`);

  }



  res.send( users.find(element => element._id === id));
});



/*app.get('/users/:id', (req, res) => {
  return res.send({error: 'Такого пользователя нет'});

});*/


app.get('/cards', (req, res) => {
  res.send(
    cards
  );
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
module.exports = router;


