const express = require("express")
const router = express.Router()
const tutorSubjectDataController = require("../controller/tutorSubjectsController")

router.get("/tutorsubjects/", tutorSubjectDataController.index)
router.post("/tutorsubjects/", tutorSubjectDataController.store)
router.get("/tutorsubjects/:id/edit", tutorSubjectDataController.edit)
router.put("/tutorsubjects/:id", tutorSubjectDataController.update)
router.delete("/tutorsubjects/:id", tutorSubjectDataController.destroy)
module.exports = router