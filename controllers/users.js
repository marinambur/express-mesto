const path = require('path');
const {
  getFile,
} = require('../helpers');
const User = require('../models/user');
const users = path.join(__dirname, '..', 'data', 'users.json');

const createUser = (req, res) => {
  const {name, about, avatar} = req.body;

  User.create({name, about, avatar})
    .then(user => res.send({data: user}))
    .catch(err => res.status(500).send({message: 'Произошла ошибка'}));
};

const getUsers = (req, res) => {
  User.find({})
    .then(users => res.send({data: users}))
    .catch(() => res.status(500).send({message: 'Произошла ошибка'}));
};


const getUserById = (req, res) => {
  console.log(req.params.id);//выводит верный Id!!!!
  User.findById(req.params.id)

    .then((user) => {
      console.log(user);//null!!!!
      if (user) {
        res.send(user);
        return;
      }
      res.status(404).send({message: "Нет такого пользoвателя"});
    })
    .catch((err) => res
      .status(500)
      .send({
        message: `Произошла ошибка: ${err}`,
      }));
};

/*
const getUserById = (req, res) => {
  getFile(users)
    .then((data) => {
      const exactUser = JSON.parse(data).find((user) => user._id === req.params.id);
      if (!exactUser) {
        res
          .status(404)
          .send({
            message: 'Нет пользователя с таким id',
          });
      }
      res
        .status(200)
        .send(exactUser);
    })
    .catch((error) => res
      .status(500)
      .send({
        message: `Произошла ошибка: ${error}`,
      }));
};*/

module.exports = {
  createUser,
  getUsers,
  getUserById
};
