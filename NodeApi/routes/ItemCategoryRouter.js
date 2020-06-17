const express = require("express")
const router = express.Router()
const ItemDataController = require("../controller/ItemCategoryController")

router.get("/ItemCategory/", ItemDataController.index)
router.get("/ItemCategory/", ItemDataController.index)
router.get("/ItemCategory/:id", ItemDataController.Get)
router.post("/ItemCategory/", ItemDataController.store)

router.put("/ItemCategory/:id", ItemDataController.update)
router.delete("/ItemCategory/:id", ItemDataController.destroy)
module.exports = router

