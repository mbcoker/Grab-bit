const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/logout', (req, res, next) => {});

userRouter.get('/login', userController.verifyUser, (req, res, next) => {
    res.json({message: 'Check'});
});

userRouter.post('/signup', userController.createUser, (req, res, next) => {
  if (res.locals.user) {
    res.json({ message: 'Check' });
  } else {
    res.json({ message: 'Failed' });
  }
});

// userRouter.delete('/', (req, res, next) => {});

module.exports = userRouter;
