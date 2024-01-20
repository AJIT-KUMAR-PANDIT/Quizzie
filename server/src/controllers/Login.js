const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SignUpUser = require('../Models/SignUpUser');

const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await SignUpUser.findOne({ email });

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
