const Shop = require('../Shop.model');

module.exports = {
  getAll: function (callback) {
    Shop.find({}, callback);
  },

  create: function (req, callback) {
    let data = req.body;
    var currentUser= req.profile==undefined?"":req.profile.UserName;
    let shop = new Shop(
      {
        Name: data.Name,
        Detail: data.Detail,
        Address: data.Address,
        Phone: data.Phone,
        City: data.City,
        Email: data.Email,
        EmailVerified: data.EmailVerified,
        ShopPercentage:data.ShopPercentage,
        IsActive: data.IsActive,
        CreatedBy: currentUser,
        UpdatedBy: currentUser
      }
    );

    var result = shop.save(callback);
  },

  getById: function (ShopID, callback) {

    Shop.findById(ShopID, callback);
  },

  update: function (ShopID, req, callback) {
    let data = req.body;
    // data.UpdatedBy=req.profile.UserName;
    Shop.findByIdAndUpdate(ShopID, { $set: data }, callback);
  },

  destroy: function (ShopID, callback) {
    Shop.findByIdAndDelete(ShopID, callback);
  },

}
