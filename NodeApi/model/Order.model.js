var bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({   
    CustomerName: {type: String, required: true, max: 100},
    CustomerDescription: {type: String, max: 1000},
    CustomerNumber: {type: String, required: true, max: 1000},
    CustomerEmailAddress: {type: String, required:true, max:100},
    OrderStatus:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderStatus"
    },
    OrderItem: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "OrderItem"
        }
    ],
    TotalPrice:{type: Number},
    Currency:{type: String, max: 100, default:"PKR"},
    IsDeleted: {type: Boolean, required: false, default:false},   
    CreatedBy: {type: String, required: false, max: 100},
    UpdatedBy: {type: String, required: false, max: 100}
},{timestamps: true});

// Export the model
module.exports = mongoose.model('Order', OrderSchema);
