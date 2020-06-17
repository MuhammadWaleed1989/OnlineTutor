const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderItemSchema = new Schema({      
    Item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item"
        }
    ,
    ItemPrice:{type: Number},
    ItemCurrency:{type: String, max: 100, default:"PKR"},
    ItemStatus:{type: String, max: 500},
    IsDeleted: {type: Boolean, required: false, default:false},   
    CreatedBy: {type: String, required: false, max: 100},
    UpdatedBy: {type: String, required: false, max: 100}
},{timestamps: true});

// Export the model
module.exports = mongoose.model('OrderItem', OrderItemSchema);
