const OrderStatus = require('../OrderStatus.model');
module.exports = {
  getAll: function (callback) {
    OrderStatus.find({}, callback);
  },

  create: function (req, callback) {
    let data=req.body;
    let orderStatus = new OrderStatus(
        {
          Status:data.Status,
          Description: data.Description,
          IsDeleted:false,
          CreatedBy: req.profile.UserName,
          UpdatedBy: req.profile.UserName
        }
      );
    orderStatus.save(orderStatus,callback);
  },

  getById: function (OrderStatusID, callback) {

    OrderStatus.findById(OrderStatusID,callback).populate('Shop');
  },

  update: function ( OrderStatusID, req, callback) {
    let data=req.body;
    data.UpdatedBy=req.profile.UserName;
    OrderStatus.findByIdAndUpdate(OrderStatusID,{$set: data},callback);
  },

  destroy: function (OrderStatusID, callback) {
    OrderStatus.findByIdAndDelete(OrderStatusID, callback);
  },

}
