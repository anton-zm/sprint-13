const card = require('../models/card');

module.exports.getCards = (req, res) => {
  card
    .find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Что-то пошло не так' }));
};
module.exports.createCard = (req, res) => {
  // console.log(req.user._id);
  card.create({ name: 'Test', link: 'test.link', owner: 'owner' }).then((cards) => res.send({ data: cards }));
};
