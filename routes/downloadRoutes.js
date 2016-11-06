const express = require('express');
const passport = require('passport');
const passportService = require('../services/passport');

const downloadRouter = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

const routes = function routes() {
  const downloadController = require('../controllers/download.server.controller')();

  downloadRouter.route('/:file')
      .get(downloadController.downloadFile);

  return downloadRouter;
};

module.exports = routes;
