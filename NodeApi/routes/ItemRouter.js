const express = require("express")
const router = express.Router()
const ItemDataController = require("../controller/itemController")
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

router.get("/Item/", ItemDataController.index)
router.get("/Item/:id", ItemDataController.Get)
router.post("/Item/", upload.array('ItemPicList', 2), ItemDataController.store)

router.put("/Item/:id", ItemDataController.update)
router.delete("/Item/:id", ItemDataController.destroy)
module.exports = router

