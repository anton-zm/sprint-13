const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    /*eslint-disable*/
    validate: {
      validator: function (text) {
        return (
          text.indexOf(
            '^(https?://)((((www.)?[wd](([wd.-]+)*)[wd]*.(([a-z]{2,}).?)+)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(:(?=[1-9])([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])?)?)(/(?!/)[wd]*)*?#?$'
          ) === 0
        );
      },
      /* eslint-enable */
      message: 'Нужно ввести ссылку',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: '',
    required: true,
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardsSchema);
