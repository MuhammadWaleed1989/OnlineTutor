const express = require("express")
const router = express.Router()
const ItemDataController = require("../controller/OrderStatusController")

router.get("/OrderStatus/", ItemDataController.index)
router.get("/OrderStatus/:id", ItemDataController.Get)
router.post("/OrderStatus/", ItemDataController.store)

router.put("/OrderStatus/:id", ItemDataController.update)
router.delete("/OrderStatus/:id", ItemDataController.destroy)
module.exports = router

