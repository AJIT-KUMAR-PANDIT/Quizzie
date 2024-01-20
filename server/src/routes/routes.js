const signUp = require("../controllers/signUp");
const login = require("../controllers/login");

const router = require("express").Router();


router.route('/signUp').post(signUp);
router.route('/login').post(login);


module.exports = {signUp, login};