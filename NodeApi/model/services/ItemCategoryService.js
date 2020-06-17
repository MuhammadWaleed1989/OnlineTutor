const ItemCategory = require('../ItemCategory.model');
module.exports = {
  getAll: function (callback) {
    ItemCategory.find({}, callback);
  },

  create: function (req, callback) {
    let data=req.body;
    let itemCategory = new ItemCategory(
        {
          Name:data.Name,
          Description: data.Description,
          IsDeleted:false,
          CreatedBy: req.profile.UserName,
          UpdatedBy: req.profile.UserName
        }
      );
    itemCategory.save(itemCategory,callback);
  },

  getById: function (ItemCategoryID, callback) {

    ItemCategory.findById(ItemCategoryID,callback).populate('Shop');
  },

  update: function ( ItemCategoryID, req, callback) {
    let data=req.body;
    data.UpdatedBy=req.profile.UserName;
    ItemCategory.findByIdAndUpdate(ItemCategoryID,{$set: data},callback);
  },

  destroy: function (ItemCategoryID, callback) {
    ItemCategory.findByIdAndDelete(ItemCategoryID, callback);
  },

}
