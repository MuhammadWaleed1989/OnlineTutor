var bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({   
    Shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
      },
    ItemName: {type: String, required: true, max: 100},
    ItemDescription: {type: String, required: true, max: 1000},
    ItemCategory: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ItemCategory"
        },
    ItemPicList: [{type: String, max:500}],
    IsOutOfInventory: {type: Boolean, required: false,default:false},
    MaxOrderCount:{type: Number},
    ItemPrice:{type: Number},
    ItemCurrency:{type: String, max: 100, default:"PKR"},
    IsDeleted: {type: Boolean, required: false, default:false},   
    CreatedBy: {type: String, required: false, max: 100},
    UpdatedBy: {type: String, required: false, max: 100}
},{timestamps: true});


// Export the model
module.exports = mongoose.model('Item', ItemSchema);