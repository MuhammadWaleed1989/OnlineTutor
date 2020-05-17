const express = require("express")
const router = express.Router()
const UserDataController = require("../controller/userController")
const verifyToken = require('../middleware/verifyToken');
const multer = require('multer')
const DIR = './uploads/';
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

        cb(null, true);
    }
});


router.post("/user/", upload.single('profileImg'), UserDataController.store)
router.post("/users/", UserDataController.index)
router.get("/user/:UserID/edit", verifyToken, UserDataController.edit)
router.put("/users/:UserID", upload.single('profileImg'), verifyToken, UserDataController.update)
router.delete("/user/:UserID", UserDataController.destroy)
router.put("/updatePassword/:UserID", verifyToken, UserDataController.updatePassword)
router.put("/updateUserProfileAccess/", verifyToken, UserDataController.updateUserProfileAccess)

module.exports = router