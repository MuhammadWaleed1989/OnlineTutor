const express = require("express")
const router = express.Router()
const OrderDataController = require("../controller/OrderController")

router.get("/Order/", OrderDataController.index)
router.get("/Order/:id", OrderDataController.Get)

router.put("/Order/:id", OrderDataController.update)
router.delete("/Order/:id", OrderDataController.destroy)
module.exports = router

