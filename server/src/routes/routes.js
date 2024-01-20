const SignUp = require("../Controllers/signUp");
const Login = require("../Controllers/login");


const router = require("express").Router();


router.route('/signup').post(SignUp);
router.route('/login').post(Login);


module.exports = {SignUp, Login};