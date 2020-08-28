const path = require('path');
const {
  getFile,
} = require('../helpers');
const users = path.join(__dirname, '..', 'data', 'users.json');
const getUsers = (req, res) => {
  getFile(users)
    .then((data) => res
      .status(200)
      .send(JSON.parse(data)))
    .catch((error) => res
      .status(500)
      .send({
        message: `Произошла ошибка: ${error}`,
      }));
};
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
};

module.exports = {
  getUsers,
  getUserById,
};