const express = require("express")
const router = express.Router()
const loginController = require("../controller/loginController")

router.post("/token/", loginController.signin)

module.exports = router