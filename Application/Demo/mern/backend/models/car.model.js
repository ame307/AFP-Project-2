const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: {type: String, required: true, trim: true, minlength: 3},
    model: {type: String, required: true, trim: true, minlength: 1},
    consumption: {type: Number, required: true, trim: true, minlength: 1},
}, {
    timestamps: true,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;