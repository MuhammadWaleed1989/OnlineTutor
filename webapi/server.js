const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const con = require("./config/db.js")
const router = require('./routes');
const multer = require('multer')
const config = require('./config/init')
var swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

require('dotenv').config();
const port = process.env.PORT || 5000;
const DIR = './uploads/';
// connecting route to database
app.use(function (req, res, next) {
  req.con = con

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
})

// parsing body request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// register routes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log(file.mimetype)
    cb(null, true);
  }
});
app.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
  console.log(req.file)
  const url = req.protocol + '://' + req.get('host')

  var profileImg = url + '/uploads/' + req.file.filename


})
app.use('/uploads', express.static('uploads'));
app.use('/', router());
//
//app.use(config.cors);
// starting server

app.listen(port, function () {
  console.log(`server listening on port : ${port}`);
})
