// get our mongoose model
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/index'); // get our config file

/**
 * This api is use to verify token for each request,
 * when client requests with a token this API decodes that match with existing token  and send with 
 * decoded object.
 * We set currUser i.e. current user to req object so we can access somewhere else.
 */

var verifyToken = function (req, res, next) {
       
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
        

        if (token) {
            if (token.startsWith('Bearer ')) {
                // Remove Bearer from string
                token = token.slice(7, token.length);
            }
            jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                success: false,
                message: 'Token is not valid'
                });
            } else {
                req.profile = decoded;
                next();
            }
            });
        } else {
            return res.status(401).json({
            success: false,
            message: 'Auth token is not supplied'
            });
        }
};
module.exports = verifyToken;