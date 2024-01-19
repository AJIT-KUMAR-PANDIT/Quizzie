const Signup = require("../Models/SignUp");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const SignUp = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({
            status: 400,
            message: "All fields are required.",
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            status: 400,
            message: "Passwords do not match.",
        });
    }

    try {

        if (await Signup.findOne({ email })) {
            return res.status(409).json({ 
                status: 409,
                message: "User already exists" 
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newSignup = new Signup({
            name,
            email,
            password: hashedPassword,
        });

        const savedSignup = await newSignup.save();

        res.status(200).json({
            status: 200,
            message: "User Created",
            data: savedSignup,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: "User Not Created",
            error: err.message,
        });
    }
};

module.exports = SignUp;
