const express = require("express")
const router = express.Router()
const ShopDataController = require("../controller/shopController")

router.get("/Shop/", ShopDataController.index)
router.get("/Shop/:id", ShopDataController.Get)
router.post("/Shop/", ShopDataController.store)
router.put("/Shop/:id", ShopDataController.update)
router.delete("/Shop/:id", ShopDataController.destroy)
module.exports = router

