const user = require('../models/user');

module.exports.getUsers = (req, res) => {
  user
    .find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Что-то пошло не так' }));
};

module.exports.getUser = (req, res) => {
  user
    .findById(req.params.userId)
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(404).send({ message: 'Нет пользователя с таким id' }));
};
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  user
    .create({ name, about, avatar })
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: err }));
};
module.exports.updateProfile = (req, res) => {
  user
    .findByIdAndUpdate(req.user._id, { name: 'Anton Zmanovskii', about: 'Web Developer' })
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.updateAva = (req, res) => {
  user
    .findByIdAndUpdate(req.user._id, { avatar: 'https://balkony34.ru/wp-content/uploads/me.jpg' })
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: err }));
};
