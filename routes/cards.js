const express = require('express');
const {
  getCards,
} = require('../controllers/cards');
const cardRouter = express.Router();
cardRouter.get('/', getCards);
module.exports = cardRouter;
