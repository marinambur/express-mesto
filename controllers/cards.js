const Card = require('../models/card');

const createCard = (req, res) => {
  const {name, link} = req.body;
  Card.create({name, link})
    .then(card => res.send(card))
    .catch(() => res.status(500).send({message: 'Произошла ошибка'}));
};

const getCards = (req, res) => {
  Card.find({})
    .then(cards => res.send(cards))
    .catch(() => res.status(500).send({message: 'Произошла ошибка'}));
};


const deleteCardById = (req, res) => {
  console.log(req.params.id)
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (card) {
        res.send(card);
        return;
      }
      res.status(404).send({message: "Нет такого пользователя"});
    })
    .catch((err) => res
      .status(500)
      .send({
        message: `Произошла ошибка: ${err}`,
      }));
};

const getCardById = (req, res) => {
  Card.findById(req.params.id)
    .then((card) => {
      console.log(card);
      if (card) {
        res.send(card);
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

module.exports = {
  createCard,
  getCards,
  deleteCardById,
  getCardById
};

