const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    patient_name : {
        type : String,
        required: true
    },
    patient_nic : {
        type : String,
        required: true
    },
    p_num : {
        type : Number,
        required: true
    },
    amount: {
        type : Number,
        required: true
    },
    pay_method: {
        type : String,
        required: true
    },
    date: {
        type : String,
        required: true
    },
    time: {
        type : String,
        required: true
    }


})

const Payment = mongoose.model("Payment",paymentSchema);

module.exports = Payment;

