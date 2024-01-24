const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signUpUser = require('../models/signUpUser');

const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await signUpUser.findOne({ email });

        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'User not found.',
            });
        }

        
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                status: 401,
                message: 'Incorrect password.',
            });
        }

        
        const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

          res.status(200).json({
            status: 200,
            message: 'Login successful',
            _id:user._id,
            token: token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            message: 'Login failed',
            error: err.message,
        });
    }
};

module.exports = Login;
