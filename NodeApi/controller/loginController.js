const LoginData = require("../model/services/LoginService")
var jwt = require('jsonwebtoken');
const config = require("../config");
var bcrypt = require("bcryptjs");

module.exports = {
    signin: function (req, res) {
        LoginData.signin(req.body.Email, function (err, user) {
            console.log("requesting user: " + req.body.Email);
            if (err) {
                res.json({ "Error": true, "Message": "error finding user" });
            }
            else {
                console.log("user:" + user)
                if (user != null) {

                    //compare Password
                    user.comparePassword(req.body.Password, function (err, isMatch) {
                        if (err) {
                            console.log("error: " + err);
                            return res.status(401).send({
                                accessToken: null,
                                message: "Invalid Password!"
                            });
                        }

                        var token = jwt.sign({
                            FirstName: user.FirstName, LastName: user.LastName
                            , UserName: user.UserName
                            , Email: user.Email
                            , IsEmployee: user.IsEmployee
                            , PhoneVerified: user.PhoneVerified
                            , Picture: user.Picture
                        }, config.secret, {
                            expiresIn: 86400 // 24 hours
                        });

                        res.json({
                            success: true,
                            message: 'Token generated',
                            accessToken: token,
                            user: user
                        });

                    });

                }
                else {
                    res.json({ "Error": true, "Message": "wrong email/password combination" });
                }

            }
        })
    }

}