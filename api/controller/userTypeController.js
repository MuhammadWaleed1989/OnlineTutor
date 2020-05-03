const UserTypeData = require("../model/UserTypeData")

module.exports = {
  /* Get all record */
  index: function (req, res) {
    UserTypeData.get(req.con, function (err, rows) {
      res.json(rows);
    })
  },
  /* Post data to DB */
  store: function (req, res) {
    UserTypeData.create(req.con, req.body, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record created successfully" });
      }
    })
  },

  edit: function (req, res) {
    UserTypeData.getById(req.con, req.params.id, function (err, rows) {
      res.json(rows);
    })
  },

  update: function (req, res) {
    UserTypeData.update(req.con, req.body, req.params.UserTypeID, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record updated successfully" });
      }
    })
  },

  destroy: function (req, res) {
    UserTypeData.destroy(req.con, req.params.UserTypeID, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  }
}
