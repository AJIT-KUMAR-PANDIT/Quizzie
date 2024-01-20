const signUp = require("../Controllers/signUp");
const login = require("../Controllers/login");

const router = require("express").Router();


router.route('/signUp').post(signUp);
router.route('/login').post(login);


module.exports = {signUp, login};