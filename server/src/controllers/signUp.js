const signUpUser = require("../models/signUpUser");
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

        if (await SignUpUser.findOne({ email })) {
            return res.status(409).json({ 
                status: 409,
                message: "User already exists" 
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newSignUpUser = new SignUpUser({
            name,
            email,
            password: hashedPassword,
        });

        const savedSignUpUser = await newSignUpUser.save();

        res.status(200).json({
            status: 200,
            message: "User Created",
            data: savedSignUpUser,
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
