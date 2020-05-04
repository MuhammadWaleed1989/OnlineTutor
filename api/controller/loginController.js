const LoginData = require("../model/LoginData")
var jwt = require('jsonwebtoken');
const config = require("../config");
var bcrypt = require("bcryptjs");

module.exports = {
    signin: function (req, res) {
        LoginData.signin(req.con, req.body, function (err, rows) {

            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" });
            }
            else {

                if (rows.length == 1) {

                    var passwordIsValid = bcrypt.compareSync(
                        req.body.Password,
                        rows[0].Password
                    );

                    if (!passwordIsValid) {
                        return res.status(401).send({
                            accessToken: null,
                            message: "Invalid Password!"
                        });
                    }
                    var token = jwt.sign({ Password: rows[0].Password }, config.secret, {
                        expiresIn: 86400 // 24 hours
                    });

                    res.json({
                        success: true,
                        message: 'Token generated',
                        accessToken: token,
                        user: rows
                    });
                }
                else {
                    res.json({ "Error": true, "Message": "wrong email/password combination" });
                }

            }
        })
    }

}