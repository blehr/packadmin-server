const jwt = require('jwt-simple');
const config = require('../config');


const authController = (User) => {
  // create token
  function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
  }

  const signin = (req, res, next) => {
    // User has already had their email and password auth'd
    // just need to give them a token
    res.send({ token: tokenForUser(req.user) });
  };

  const signup = (req, res, next) => {
    const email = req.body.data.email;
    const password = req.body.data.password;
    const packNumber = req.body.data.packNumber;
    const name = req.body.data.name;

    if (!email || !password) {
      return res.status(422).send({ error: 'You must provide email and password' });
    }

    // see if a user with given email exist
    User.findOne({ email }, (err, existingUser) => {
      if (err) { return next(err); }

      // if a user does exist, return an error
      if (existingUser) {
        return res.status(422).send({ error: 'An account already exists for this email' });
      }

      // if a user with email does not exist, create and save user record
      const user = new User({
        email,
        password,
        packNumber,
        name,
      });

      user.save((error) => {
        if (error) { return next(error); }

        // respond to request indicating the user was created
        res.json({ token: tokenForUser(user) });
      });
    });
  };

  const fetchProfile = (req, res, next) => {
    User.findById(req.user._id, (err, user) => {
      if (err) { return next(err); }
      const userProfile = {};
      userProfile.name = user.name;
      userProfile.packNumber = user.packNumber;
      res.status(200).json(userProfile);
    });
  };

  const updateProfile = (req, res, next) => {
    const newProfile = {};
    newProfile.name = req.body.name;
    newProfile.packNumber = req.body.packNumber;
    User.findByIdAndUpdate(req.user._id, newProfile, { new: true }, (err, user) => {
      if (err) { res.status(422).send(err); }
      const userProfile = {};
      userProfile.name = user.name;
      userProfile.packNumber = user.packNumber;
      res.status(201).json(userProfile);
    });
  };

  return {
    signin,
    signup,
    fetchProfile,
    updateProfile,
  };
};


module.exports = authController;
