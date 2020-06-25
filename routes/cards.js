const cardsRouter = require('express').Router();
const card = require('../models/card');
const { getCards } = require('../controllers/cards');

// const fs = require('fs').promises;
// const path = require('path');

// const cardsArray = path.join(__dirname, '../data/cards.json');

// const cards = async () => JSON.parse(await fs.readFile(cardsArray, { encoding: 'utf8' }));

cardsRouter.get('/', getCards);

module.exports = cardsRouter;
