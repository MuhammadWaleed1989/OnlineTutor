const OrderStatussData = require("../model/services/OrderStatusService")


module.exports = {
  /* Get all record */
  index: function (req, res) {
    OrderStatussData.getAll(function (err, rows) { 
      if (err) {
        res.json({ "Error": true, "Message": err.message });
      }    
      res.json(rows);
    })
  },

  /* Get by Id */
  Get: function (req, res) {
    OrderStatussData.getById(req.params.id, function (err, obj) {
          if (err) {
            res.json({ "Error": true, "Message": err.message });
          }
          else {
            res.json(obj);
          }

        })
  },

  /* Post data to DB */
  store: function (req, res) {
    OrderStatussData.create(req, function (err,object) {
      if (err) {
        console.log("Error:" + JSON.stringify(err.message));
        res.json({ "Error": true, "Message": err.message });
      }
      else {
        console.log("returning response");
        res.json({ Message: "Record created successfully ID= "+object.id });
      }
    })
  },

  update: function (req, res) {
    OrderStatussData.update(req.params.id,req,function (err,response) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        OrderStatussData.getById(req.params.id, function (err, obj) {
          if (err) {
            res.json({ "Error": true, "Message": err.message });
          }
          else {
            res.json(obj);
          }

        });

      }
    })
  },

  destroy: function (req, res) {
    OrderStatussData.destroy(req.params.id, function (err) {
      if (err) {res.json({ "Error": true, "Message": err }); }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  }
}
