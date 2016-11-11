const express = require('express');

const routes = function routes(User) {
  const resetPasswordRouter = express.Router();
  const resetPasswordController = require('../controllers/reset_password')(User);

  resetPasswordRouter.route('/')
    .post(resetPasswordController.initiateReset);

  resetPasswordRouter.route('/reset/:token')
    .post(resetPasswordController.checkAndSave);

  resetPasswordRouter.route('/submit/:token')
    .post(resetPasswordController.submitNewPassword);

  return resetPasswordRouter;
};

module.exports = routes;
