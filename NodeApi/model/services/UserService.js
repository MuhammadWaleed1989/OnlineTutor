const User = require('../User.model');
const Shop = require('../Shop.model');

module.exports = {
  getAll: function (callback) {
    User.find({}, callback).populate('Shop');
  },

  create: function (req, callback) {
    let data = req.body;
    var currentUser= req.profile==undefined?"":req.profile.UserName;
    Shop.findById(data.Shop).then(
      shop => {
        let user = new User(
          {
            FirstName: data.FirstName,
            LastName: data.LastName,
            UserName: data.UserName,
            Email: data.Email,
            Password: data.Password,
            Phone: data.Phone,
            IsActive: data.IsActive,
            IsDeleted: false,
            Address: data.Address,
            Shop: shop,
            IsEmployee: data.IsEmployee,
            PhoneVerified: data.PhoneVerified,
            EmailVerified: data.EmailVerified,
            PreviousPassword: data.PreviousPassword,
            CreatedBy: currentUser,
            UpdatedBy: currentUser
          }
        );
        var result = user.save(callback);
      });
  },

  getById: function (UserID, callback) {
    User.findById(UserID, callback).populate('Shop');
  },

  update: function (UserID, req, callback) {
    let data = req.body;
    //data.UpdatedBy = req.profile.UserName;
    User.findByIdAndUpdate(UserID, { $set: data }, callback);
  },

  destroy: function (UserID, callback) {
    User.findByIdAndDelete(UserID, callback);
  }
}
