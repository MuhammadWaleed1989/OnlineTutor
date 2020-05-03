const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const con = require("./config/db.js")
const router = require('./routes');
const config = require('./config/init')
var swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

require('dotenv').config();
const port = process.env.PORT || 5000;

// connecting route to database
app.use(function (req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// register routes

app.use('/', router());
//
app.use(config.cors);
// starting server

app.listen(port, function () {
  console.log(`server listening on port : ${port}`);
})
