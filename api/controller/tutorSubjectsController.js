const TutorData = require("../model/TutorSubjectsData")

module.exports = {
  /* Get all record */
  index: function (req, res) {
    TutorData.get(req.con, function (err, rows) {
      res.json(rows);
    })
  },
  /* Post data to DB */
  store: function (req, res) {
    TutorData.create(req.con, req.body, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record created successfully" });
      }
    })
  },

  edit: function (req, res) {
    TutorData.getById(req.con, req.params.id, function (err, rows) {
      res.json(rows);
    })
  },

  update: function (req, res) {
    TutorData.update(req.con, req.body, req.params.TutorSubjectId, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record updated successfully" });
      }
    })
  },

  destroy: function (req, res) {
    TutorData.destroy(req.con, req.params.TutorSubjectId, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  }
}
