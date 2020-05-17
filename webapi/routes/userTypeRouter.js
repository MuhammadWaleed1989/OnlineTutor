const express = require("express")
const router = express.Router()
const userTypeDataController = require("../controller/userTypeController")

router.get("/usertypes/", userTypeDataController.index)
router.post("/usertypes/", userTypeDataController.store)
router.get("/usertypes/:id/edit", userTypeDataController.edit)
router.put("/usertypes/:id", userTypeDataController.update)
router.delete("/usertypes/:id", userTypeDataController.destroy)
module.exports = router
