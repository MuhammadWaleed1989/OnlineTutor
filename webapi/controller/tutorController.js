const TutorSubjectsData = require("../model/TutorSubjectsData")
const TutorBio = require("../model/TutorBio")
const TutorReviews = require("../model/TutorReviews")
const TutorQualifications = require("../model/TutorQualifications")

module.exports = {
  /* Get all record */
  getTutorAllSubjectsAndLevels: function (req, res) {
    TutorSubjectsData.get(req.con, req.params.UserID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows);
      }
    })
  },
  /* Post data to DB */
  saveTutorSubjectAndLevels: function (req, res) {
    TutorSubjectsData.create(req.con, req.body, req.params.UserID, function (err) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json({ Message: "Record created successfully" });
      }
    })
  },

  getTutorSubjectByID: function (req, res) {
    TutorSubjectsData.getById(req.con, req.params.TutorSubjectsID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows);
      }
    })
  },

  updateTutorSubject: function (req, res) {
    TutorSubjectsData.update(req.con, req.body, req.params.TutorSubjectsID, function (err) {
      if (err) { res.json({ "Error": true, "Message": err }); }
      else {
        res.json({ Message: "Record updated successfully" });
      }
    })
  },

  deleteTutorSubject: function (req, res) {
    TutorSubjectsData.destroy(req.con, req.params.TutorSubjectsID, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  },
  /* Get all record */
  getTutorBio: function (req, res) {
    TutorBio.get(req.con, req.params.UserID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        if (rows.length > 0) {
          res.json(rows[0]);
        }
        else {
          res.json({ TutorBioID: "-1", LongDescription: '', PayPerHour: '', University: '', MajorSubject: '', Grade: '' });
        }

      }
    })
  },
  /* Post data to DB */
  saveTutorBio: function (req, res) {
    TutorBio.create(req.con, req.body, req.params.UserID, function (err) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json({ Message: "Record created successfully" });
      }
    })
  },

  getTutorBioByID: function (req, res) {
    TutorBio.getById(req.con, req.params.TutorBioID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows);
      }
    })
  },

  updateTutorBio: function (req, res) {
    TutorBio.update(req.con, req.body, req.params.TutorBioID, function (err) {
      if (err) { res.json({ "Error": true, "Message": err }); }
      else {
        res.json({ Message: "Record updated successfully" });
      }
    })
  },

  deleteTutorBio: function (req, res) {
    TutorBio.destroy(req.con, req.params.TutorBioID, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  },
  /* Get all record */
  getTutorReviews: function (req, res) {
    TutorReviews.get(req.con, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows);
      }
    })
  },
  /* Post data to DB */
  saveTutorReviews: function (req, res) {
    TutorReviews.create(req.con, req.body, function (err) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json({ Message: "Record created successfully" });
      }
    })
  },

  getTutorReviewsByID: function (req, res) {
    TutorReviews.getById(req.con, req.params.TutorReviewsID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows);
      }
    })
  },

  updateTutorReviews: function (req, res) {
    TutorReviews.update(req.con, req.body, req.params.TutorReviewsID, function (err) {
      if (err) { res.json({ "Error": true, "Message": err }); }
      else {
        res.json({ Message: "Record updated successfully" });
      }
    })
  },

  deleteTutorReviews: function (req, res) {
    TutorReviews.destroy(req.con, req.params.TutorReviewsID, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  },
  /* Get all record */
  getTutorQualifications: function (req, res) {
    TutorQualifications.get(req.con, req.params.TutorID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows);
      }
    })
  },
  /* Post data to DB */
  saveTutorQualifications: function (req, res) {
    TutorQualifications.create(req.con, req.body, req.params.TutorID, function (err) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json({ Message: "Record created successfully" });
      }
    })
  },

  getTutorQualificationsByID: function (req, res) {
    TutorQualifications.getById(req.con, req.params.QualificationsID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows);
      }
    })
  },

  updateTutorQualifications: function (req, res) {
    TutorQualifications.update(req.con, req.body, req.params.QualificationsID, function (err) {
      if (err) { res.json({ "Error": true, "Message": err }); }
      else {
        res.json({ Message: "Record updated successfully" });
      }
    })
  },

  deleteTutorQualifications: function (req, res) {
    TutorQualifications.destroy(req.con, req.params.QualificationsID, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  }
}
