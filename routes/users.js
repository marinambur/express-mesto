const express = require('express');
const { createUser, getUsers, getUserById } = require('../controllers/users');

const userRouter = express.Router();
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById)
userRouter.post('/', createUser);
module.exports = userRouter;
