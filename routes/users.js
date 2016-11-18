const express = require('express');
const passport = require('passport');
const passportService = require('../services/passport');


const requireAuth = passport.authenticate('jwt',
  { session: false,
    failureRedirect: '/' });
const requireSignin = passport.authenticate('local', { session: false });

const routes = function routes(User) {
  const userRouter = express.Router();
  const authController = require('../controllers/authentication')(User);

  userRouter.post('/signin', requireSignin, authController.signin);
  userRouter.post('/signup', authController.signup);
  userRouter.route('/profile')
    .get(requireAuth, authController.fetchProfile)
    .post(requireAuth, authController.updateProfile);
  userRouter.route('/dens')
    .delete(requireAuth, authController.deleteDen)
    .post(requireAuth, authController.addDen);

  return userRouter;
};

module.exports = routes;
