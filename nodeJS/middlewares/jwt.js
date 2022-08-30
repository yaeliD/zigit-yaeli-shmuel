const jwt = require('jsonwebtoken');
const env = require('dotenv');

env.config();

const checkPermissions = async (req, res, next) => {
  try {
    let myUser = await jwt.verify(req.headers['authorization'], process.env.SECRET);
    if (myUser) {
      req.user = myUser;
      next();
    }
  }
  catch (err) {
    res.status(500).send("permission denied")
  }
}

module.exports = {
  checkPermissions
}