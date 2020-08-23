const users = require('express').Router();
const path = require('path');
const { readFile } = require('../index')
const fs = require('fs');
const userJson = path.join(__dirname, '..', 'data', 'users.json');
const express = require('express');
//const { getAllUsers, getUser } = require('../controllers/users');
//const usersRouter = express.Router();
/*app.get('/users', (req, res) => {
  res.send(
    users
  );
});*/
/*const getAllUsers = (req, res) => {
  readFile(userJson)
    .then((data) => res
      .status(200)
      .send(JSON.parse(data)))
    .catch((error) => res
      .status(500)
      .send({ message: `An error has occurred ${error}` }));
};*/

//usersRouter.get('/:id', getUser);
usersRouter.get('/', getAllUsers);


module.exports = usersRouter;


/*users.get('/', (req, res) => {
  fs.readFile(userJson, (err, data) => {
    if (err) {
      return res.status(500).send({message: err.message});
    }
    try {
      const json = JSON.parse(data);
      res.status(200).send(json);
    } catch (e) {
      console.log(e.message);
    }
  });
});*/

