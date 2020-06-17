
const User = require('../User.model');

module.exports = {
    signin: function (email, callback) {

        User.findOne({ Email: email, IsDeleted: false }, callback);
    }
}