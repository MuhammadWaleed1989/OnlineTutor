const UserData = require("../model/UserData")


module.exports = {
  /* Get all record */
  index: function (req, res) {
    UserData.get(req.con, req.body, function (err, rows) {
      res.json(rows);
    })
  },
  /* Post data to DB */
  store: function (req, res) {
    UserData.create(req.con, req.body, req.file, function (err, result) {

      // (req.file.filename)
      // const url = req.protocol + '://' + req.get('host')

      // var profileImg = url + '/uploads/' + req.file.filename
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json({ Message: "Record created successfully", insertId: result.insertId });
      }
    })
  },

  edit: function (req, res) {
    UserData.getById(req.con, req.params.UserID, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json(rows[0]);
      }

    })
  },

  update: function (req, res) {
    UserData.update(req.con, req.body, req.file, req.params.UserID, function (err) {

      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        UserData.getById(req.con, req.params.UserID, function (err, rows) {
          if (err) { res.json({ "Error": true, "Message": err }); }
          else {
            res.json(rows);
          }

        })
      }
    })
  },

  updatePassword: function (req, res) {
    UserData.updatePassword(req.con, req.body, req.params.UserID, function (err) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json({ "Message": "Password updated successfully" });
      }
    })
  },

  updateUserProfileAccess: function (req, res) {
    UserData.updateUserProfileAccess(req.con, req.body, function (err) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        res.json({ "Message": "Record updated successfully" });
      }
    })
  },

  destroy: function (req, res) {
    UserData.destroy(req.con, req.params.UserID, function (err) {
      if (err) { }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  }
}
