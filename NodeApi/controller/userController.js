const UserData = require("../model/services/UserService")

module.exports = {
  /* Get all record */
  index: function (req, res) {
    console.log("user get all api called");
    UserData.getAll(function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": err.message });
      }
      res.json(rows);
    })
  },

  /* Get User by Id */
  Get: function (req, res) {
    console.log("user get by ID api called: " + req.params.id);
    UserData.getById(req.params.id, function (err, user) {
      if (err) {
        res.json({ "Error": true, "Message": err.message });
      }
      else {
        if (user != null) { user.Password = "" };
        res.json(user);
      }

    })
  },

  /* Post data to DB */
  store: function (req, res) {
    console.log("user create api called");
    console.log(req.body);
    UserData.create(req, function (err, object) {

      if (err) {


        console.log("Error:" + JSON.stringify(err.message));
        res.json({ "Error": true, "Message": err.message });
      }
      else {
        console.log("returning response");
        res.json({ Message: "Record created successfully ID= " + object.id });
      }
    })
  },

  update: function (req, res) {
    console.log(req.params.id)
    UserData.update(req.params.id, req, function (err, response) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        UserData.getById(req.params.id, function (err, user) {
          if (err) {
            res.json({ "Error": true, "Message": err.message });
          }
          else {
            user.Password = "";
            res.json(user);
          }

        });

      }
    })
  },

  destroy: function (req, res) {
    UserData.destroy(req.params.id, function (err) {
      if (err) { res.json({ "Error": true, "Message": err }); }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  }
}
