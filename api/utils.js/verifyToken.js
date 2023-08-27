const jwt = require("jsonwebtoken");
const createError = require("./error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }

  jwt.verify(token, "fgcjkjl;'kkvghhjgk", (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid"));
    }
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }else{
      if(err){
        return next(createError(403, "You are not authorized"));
      }
    }
  });
};
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
          next()
      }else{
        if(err){
          return next(createError(403, "You are not authorized"));
        }
      }
    });
  };

module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin
};
