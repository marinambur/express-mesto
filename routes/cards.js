const express = require('express');
const {
  createCard, getCards, deleteCardById,
} = require('../controllers/cards');

const cardRouter = express.Router();
cardRouter.get('/', getCards);
cardRouter.delete('/:id', deleteCardById);
cardRouter.post('/', createCard);
module.exports = cardRouter;
