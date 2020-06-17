const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemCategorySchema = new Schema({   
    Name:{type:String, required:true,index: { unique: true }},
    Description: {type: String, required: false, max:1000},   
    IsDeleted: {type: Boolean, required: false, default:false},
    CreatedBy: {type: String, required: false, max: 100},
    UpdatedBy: {type: String, required: false, max: 100}
},{timestamps: true});


// Export the model
module.exports = mongoose.model('ItemCategory', itemCategorySchema);