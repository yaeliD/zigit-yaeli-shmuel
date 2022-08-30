const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// create a new user
const createUser = async (req, res) => {
    const newUser = new User(req.body);
    let token;
    try {
        const user = await newUser.save();
        token = jwt.sign(JSON.stringify(req.body), process.env.SECRET);
        res.status(200).json({
            message: "user created successfuly",
            TheUser: user,
            token
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
};


// User LogIn
const logIn = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password }).then(user => {
        if (user) {
            let token = jwt.sign(JSON.stringify(user), process.env.SECRET)
            res.status(200).json({
                message: "user logged in successfuly",
                user,
                token
            })
        }
        else {
            res.status(200).json({
                message: "user not found"
            })
        }
    }).catch(err => {
    })
};

module.exports = {
    createUser,
    logIn,
}