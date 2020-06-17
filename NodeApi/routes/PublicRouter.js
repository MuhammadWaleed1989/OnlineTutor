const express = require("express")
const router = express.Router()
const OrderDataController = require("../controller/OrderController")
const ShopDataController = require("../controller/ShopController")
router.post("/Public/Order", OrderDataController.store)
router.post("/Public/Shop", ShopDataController.PublicStore)
module.exports = router

