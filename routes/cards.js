const express = require('express');
const {
  createCard, getCards, deleteCardById, getCardById,
} = require('../controllers/cards');

const cardRouter = express.Router();
cardRouter.get('/', getCards);
cardRouter.delete('/:id', deleteCardById);
cardRouter.get('/:id', getCardById);
cardRouter.post('/', createCard);
module.exports = cardRouter;
