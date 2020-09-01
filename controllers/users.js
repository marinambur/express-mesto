const User = require('../models/user');

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.send(user);
        return;
      }
      res.status(404).send({ message: 'Нет такого пользoвателя' });
    })
    .catch((err) => res
      .status(500)
      .send({
        message: `Произошла ошибка: ${err}`,
      }));
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
