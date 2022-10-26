// file acts as a middleware

const jwt = require("jsonwebtoken");
require("dotenv").config;

module.exports = (req, res, next) => {
  let token = "";
  let authorizationToken = req.header("Authorization");

  if (authorizationToken) {
    authorizationToken = authorizationToken.replace("Bearer ", "");

    token = authorizationToken;
  }

  if (!token) {
    return res.json({
      message:
        "You cannot view this as it is hidden behind the wall of authentication.",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    return res.json({ message: "Your token is invalid." });
  }
};
