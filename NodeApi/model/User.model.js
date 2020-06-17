var bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR=10;


let UserSchema = new Schema({
    FirstName: {type: String, required: true, max: 100},
    LastName: {type: String, required: true, max: 100},
    UserName: {type: String, required: true, max: 100, index: { unique: true }},
    Email: {type: String, required: true, max: 100},
    Password: {type: String, required: true, max: 100},
    Picture:{type: String, max: 100},
    Phone: {type: String, required: true, max: 100},
    IsActive: {type: Boolean, required: false,default:false},
    IsDeleted: {type: Boolean, required: false, default:false},
    Address: {type: String, required: false, max: 100},
    Shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
      },
    IsEmployee: {type: Boolean, required: true},    
    PhoneVerified: {type: Boolean, required: false},
    EmailVerified: {type: Boolean, required: false},    
    PreviousPassword: {type: String, required: false, max: 100},
    CreatedBy: {type: String, required: false, max: 100},
    CreatedDate: {type: Date, required: false},
    UpdatedBy: {type: String, required: false, max: 100},
    UpdatedDate: {type: Date, required: false}
},{timestamps: true});


UserSchema.pre("save", function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('Password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.Password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.Password = hash;
            next();
        });
    });
});


UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.Password, function(err, isMatch) {
        if (err) return callback(err,null);
        callback(null, isMatch);
    });
};


// Export the model
module.exports = mongoose.model('User', UserSchema);