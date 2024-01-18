const Signup =  require("../controllers/Signup");



const router = require("express").Router();

router.route("/signup").post(Signup);