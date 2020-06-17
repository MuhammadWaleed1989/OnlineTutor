const express = require("express")
const router = express.Router()
const tutorController = require("../controller/tutorController")

router.get("/getTutorAllSubjectsAndLevels/:UserID", tutorController.getTutorAllSubjectsAndLevels)
router.post("/saveTutorSubjectAndLevels/:UserID", tutorController.saveTutorSubjectAndLevels)
// router.get("/gettutorsubjectbyid/:TutorSubjectsID/edit", tutorController.getTutorSubjectByID)
// router.put("/updatetutorsubject/:TutorSubjectsID", tutorController.updateTutorSubject)
// router.delete("/deletetutorsubject/:TutorSubjectsID", tutorController.deleteTutorSubject)

router.get("/gettutorbio/:UserID", tutorController.getTutorBio)
router.post("/savetutorbio/:UserID", tutorController.saveTutorBio)
router.get("/gettutorbiobyid/:UserID/edit", tutorController.getTutorBioByID)
router.put("/updatetutorbio/:UserID", tutorController.updateTutorBio)
router.delete("/deletetutorbio/:UserID", tutorController.deleteTutorBio)

router.get("/gettutorreview/", tutorController.getTutorReviews)
router.post("/savetutorreview/", tutorController.saveTutorReviews)
router.get("/gettutorreviewbyid/:id/edit", tutorController.getTutorReviewsByID)
router.put("/updatetutorreview/:id", tutorController.updateTutorReviews)
router.delete("/deletetutorreview/:id", tutorController.deleteTutorReviews)

router.get("/gettutorqualifications/:TutorID", tutorController.getTutorQualifications)
router.post("/savetutorqualification/:TutorID", tutorController.saveTutorQualifications)
router.get("/gettutorqualificationbyid/:id/edit", tutorController.getTutorQualificationsByID)
router.put("/updatetutorqualification/:id", tutorController.updateTutorQualifications)
router.delete("/deletetutorqualification/:id", tutorController.deleteTutorQualifications)

module.exports = router