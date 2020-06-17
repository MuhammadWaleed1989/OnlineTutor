const ItemCategorysData = require("../model/services/ItemCategoryService")


module.exports = {
  /* Get all record */
  index: function (req, res) {
    ItemCategorysData.getAll(function (err, rows) { 
      if (err) {
        res.json({ "Error": true, "Message": err.message });
      }    
      res.json(rows);
    })
  },

  /* Get by Id */
  Get: function (req, res) {
    ItemCategorysData.getById(req.params.id, function (err, obj) {
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
    ItemCategorysData.create(req, function (err,object) {
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
    ItemCategorysData.update(req.params.id,req,function (err,response) {
      if (err) {
        res.json({ "Error": true, "Message": err });
      }
      else {
        ItemCategorysData.getById(req.params.id, function (err, obj) {
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
    ItemCategorysData.destroy(req.params.id, function (err) {
      if (err) {res.json({ "Error": true, "Message": err }); }
      else {
        res.json({ Message: "Record deleted successfully" });
      }
    })
  }
}
