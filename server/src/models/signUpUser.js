const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Signup = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const signUpUser = mongoose.model("SignUp", Signup);
module.exports = signUpUser;