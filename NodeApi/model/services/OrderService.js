const Order = require('../Order.model');
const OrderItem = require('../OrderItem.model');
//const Shop = require('../Shop.model');
const Item = require('../Item.model');
const OrderStatus = require('../OrderStatus.model');


const AddItemsToOrder = function(orderId, orderItem,callback) {
  return Order.findByIdAndUpdate(
    orderId,
    { $push: { OrderItem: orderItem._id } },
    { new: true, useFindAndModify: false }
  ,callback);
};

module.exports = {
  getAll: function (callback) {
    Order.find({},callback).populate('OrderItem').populate('OrderStatus');
  },

  create: function (req, callback) {
    let data=req.body;
    let ItemsList= req.body.ItemList;
    OrderStatus.findById(data.OrderStatusID).then(            
      orderStatus => {        
                      let order = new Order(
                          {
                            CustomerName:data.CustomerName,
                            CustomerDescription: data.CustomerDescription,
                            CustomerNumber: data.CustomerNumber,
                            CustomerEmailAddress: data.CustomerEmailAddress,
                            OrderStatus: orderStatus,
                            TotalPrice: data.TotalPrice,
                            CreatedBy: "public",
                            UpdatedBy: "public"
                          }
                        );
                      var result=  order.save().then(order => {
                      console.log("order Added: "+ JSON.stringify(order.id));
                      ItemsList.forEach(itemOrder => {
                          Item.findById(itemOrder.Item).then(
                              itemObj => {
                                  let orderItem = new OrderItem(
                                    {
                                      Item:itemObj,
                                      ItemPrice:itemOrder.ItemPrice,
                                      ItemCurrency:itemOrder.ItemCurrency,
                                      ItemStatus:itemOrder.ItemStatus,
                                      CreatedBy:"public",
                                      UpdatedBy:"public" 
                                    }
                                  ); 
                                  orderItem.save().then(
                                    savedItem =>{
                                      
                                      console.log("order Item Added: "+ JSON.stringify(savedItem.id));
                                      console.log("orderID: "+ order.id);
                                      AddItemsToOrder(order.id, savedItem,callback);
                                      console.log("Returning");
                                      //callback(order);
                                    });
                              });
                              
                            });

                          });
                      });
   
  },
  
  
  getById: function (ItemID, callback) {
    Order.findById(ItemID,callback).populate('OrderItem').populate('OrderStatus');
  },

  update: function ( ItemID, req, callback) {
    let data=req.body;
    data.UpdatedBy=req.profile.UserName;
    Order.findByIdAndUpdate(ItemID,{$set: data},callback);
  },

  destroy: function (ItemID, callback) {
    Order.findByIdAndDelete(ItemID, callback);
  },

}
