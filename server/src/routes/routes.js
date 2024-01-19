const SignUp = require("../controllers/SignUp");
const Login = require("../controllers/Login");


const router = require("express").Router();


router.route('/signup').post(SignUp);
router.route('/login').post(Login);


module.exports = {SignUp, Login};