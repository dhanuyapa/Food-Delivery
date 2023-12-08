const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    fname : {
        type : String,
        required: true
    },

    lname : {
        type : String,
        required: true
    },

  
    phone : {
        type : String,
        required :true
    },

    email : {
        type : String,
    },

    no : {
        type : String,
        required: true
    },

    street : {
        type : String,
        required: true
    },

    city : {
        type : String,
        required: true
    },

    country : {
        type : String,
        required: true
    },

    
    password : {
        type :String,
        required : true
    },

    confirmPassword :{
        type :String,
    }

})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;