var bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShopSchema = new Schema({   
    Name: {type: String, required: true, unique:true},
    Detail: {type: String, required: true},
    Address: {type: String, required: false},
    Phone:{type: String, required: true},
    City:{type: String, required: true},
    Email:{type: String, required: true},
    ShopPercentage:{type: String, required: true},
    EmailVerified:{type: String},
    IsActive: {type: Boolean, required: false, default:false},
    IsDeleted: {type: Boolean, required: false, default:false},   
    CreatedBy: {type: String, required: false, max: 100},
    UpdatedBy: {type: String, required: false, max: 100}
},{timestamps: true});


// Export the model
module.exports = mongoose.model('Shop', ShopSchema);