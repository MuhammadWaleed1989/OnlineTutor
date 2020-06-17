const express = require("express")
const router = express.Router()
const UserDataController = require("../controller/userController")

router.get("/user/", UserDataController.index)
router.get("/user/:id", UserDataController.Get)
router.post("/user/", UserDataController.store)

router.put("/user/:id", UserDataController.update)
router.delete("/user/:id", UserDataController.destroy)
module.exports = router

