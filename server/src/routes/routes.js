const SignUp = require("../controllers/signUp");
const Login = require("../controllers/login");


const router = require("express").Router();


router.route('/signup').post(SignUp);
router.route('/login').post(Login);


module.exports = {SignUp, Login};