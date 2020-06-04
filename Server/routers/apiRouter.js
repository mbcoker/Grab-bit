const express = require('express');
const apiRouter = express.Router();
// const axios = require('axios');
const apiController = require('../controllers/apiController');

apiRouter.get('/barcode', apiController.getItem, (req, res, next) => {
  res.json(res.locals.item);
});

apiRouter.post('/add', (req, res, next) => {});

module.exports = apiRouter;
