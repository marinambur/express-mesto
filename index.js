
//const fs = require('fs').promises;

//const readFile = (file) => fs.readFile(file);


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
const { PORT = 3000 } = process.env;
//app.use('/users', usersRouter);
//app.use('/cards', cardsRouter);
/*app.use((req, res) => {
  res
    .status(404)
    .send({ message: 'Ошибка. Ресурс не найден' });
});*/
app.get('/users', (req, res) => {
  res.send(
    users
  );
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



