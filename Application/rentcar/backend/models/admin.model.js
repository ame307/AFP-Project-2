const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {type: String, trim: true, unique: true},
    email: {type: String, trim: true},
    password: {type: String, minlength: 1},
}, {
    timestamps: true,
});

// adminSchema.methods.generetaHash = function(password){
//     return bycrypt.hashSnyc(password, bycrypt.genSaltSync(8), null);
// }

// adminSchema.methods.validPassword = function(password){
//     return bycrypt.comparehSnyc(password, this.password);
// }

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;