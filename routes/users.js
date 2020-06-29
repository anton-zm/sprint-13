const usersRouter = require('express').Router();

const { getUsers, getUser, createUser, updateProfile, updateAva } = require('../controllers/users');

usersRouter.get('/', getUsers);

usersRouter.get('/:userId', getUser);

usersRouter.post('/', createUser);

module.exports = usersRouter;
