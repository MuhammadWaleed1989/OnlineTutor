var bcrypt = require("bcryptjs");

module.exports = {
    signin: function (con, data, callback) {
        con.query(`SELECT * FROM tblUser U join tblUserTypes tut on U.UserTypeID=tut.UserTypeID WHERE  U.Email = '${data.Email}' `, callback)
    }
}