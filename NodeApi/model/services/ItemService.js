const Item = require('../Item.model');
const Shop = require('../Shop.model');
const ItemCategory = require('../ItemCategory.model');

module.exports = {
  getAll: function (callback) {
    Item.find({}, callback).populate('Shop').populate('ItemCategory');
  },

  create: function (req, receivedFile, callback) {
    console.log(receivedFile);
    var imageList = [];
    for (var i = 0; i < receivedFile.length; i++) {
      imageList.push(receivedFile[i].filename);
    }

    let data = req.body;
    console.log("ItemCategoryID: " + data.ItemCategoryID);
    ItemCategory.findById(data.ItemCategoryID).then(
      itemCategory => {
        console.log("ItemCategory: " + itemCategory);
        Shop.findById(data.Shop).then(
          shop => {
            let item = new Item(
              {
                Shop: shop,
                ItemName: data.ItemName,
                ItemDescription: data.ItemDescription,
                ItemCategory: itemCategory,
                ItemPicList: imageList,
                IsOutOfInventory: data.IsOutOfInventory,
                MaxOrderCount: data.MaxOrderCount,
                ItemPrice: data.ItemPrice,
                ItemCurrency: "PKR",
                IsDeleted: false,
                CreatedBy: req.profile.UserName,
                UpdatedBy: req.profile.UserName
              }
            );
            var result = item.save(callback);
          });
      });
  },

  getById: function (ItemID, callback) {

    Item.findById(ItemID, callback).populate('Shop').populate('ItemCategory');
  },

  update: function (ItemID, req, callback) {
    let data = req.body;
    data.UpdatedBy = req.profile.UserName;
    Item.findByIdAndUpdate(ItemID, { $set: data }, callback);
  },

  destroy: function (ItemID, callback) {
    Item.findByIdAndDelete(ItemID, callback);
  },

}
