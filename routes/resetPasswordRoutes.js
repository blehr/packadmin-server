const express = require('express');

const routes = function routes(User) {
  const resetPasswordRouter = express.Router();
  const resetPasswordController = require('../controllers/reset_password')(User);

  resetPasswordRouter.route('/request')
    // .get(resetPasswordController.fetchProfile)
    .post(resetPasswordController.initiateReset);

  resetPasswordRouter.route('/reset')
    // .get(resetPasswordController)
    .post(resetPasswordController.checkAndSave);

  return resetPasswordRouter;
};

module.exports = routes;
