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
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
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
