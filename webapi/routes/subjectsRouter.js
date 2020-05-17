const express = require("express")
const router = express.Router()
const SubjectsController = require("../controller/subjectsController")
const verifyToken = require('../middleware/verifyToken');


router.get("/getallsubjects/", SubjectsController.getAllSubjects)
router.post("/savesubject/", SubjectsController.saveSubject)
router.get("/getsubjectbyid/:SubjectID/edit", verifyToken, SubjectsController.getSubjectByID)
router.put("/updatesubjectname/:SubjectID", verifyToken, SubjectsController.updateSubjectName)
router.delete("/deletesubject/:SubjectID", SubjectsController.deleteSubject)


router.get("/getAllLevels/", SubjectsController.getAllLevels)
router.get("/getAllLevelsBySubjectID/:SubjectID", SubjectsController.getAllLevelsBySubjectID)
router.post("/saveLevel/", SubjectsController.saveLevel)
router.get("/getLevelByID/:LevelID/edit", verifyToken, SubjectsController.getLevelByID)
router.put("/updateLevelName/:LevelID", verifyToken, SubjectsController.updateLevelName)
router.delete("/deleteLevel/:LevelID", SubjectsController.deleteLevel)

router.get("/getAllSubjectsAndLevel/", SubjectsController.getAllSubjectsLevel)
router.post("/savesubjectlevels/", SubjectsController.saveSubjectLevels)
router.get("/getsubjectlevelsbyID/:SubjectLevelID/edit", verifyToken, SubjectsController.getSubjectLevelsByID)
router.put("/updatesubjectlevels/:SubjectLevelID", verifyToken, SubjectsController.updateSubjectLevels)
router.delete("/deletesubjectlevels/:SubjectLevelID", SubjectsController.deleteSubjectLevels)

module.exports = router