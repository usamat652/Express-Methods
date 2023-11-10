var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model;

var apiData = new Schema({
    name: String,
    age: Number,
    profession: String,
    contact_no: String,
    gender: String
});

exports.User = model('User_Data', apiData);
