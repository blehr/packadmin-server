const express = require('express');
const passport = require('passport');
const passportService = require('../services/passport');

const pdfRouter = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

const routes = function routes() {
  const pdfController = require('../controllers/pdf.server.controller')();

  pdfRouter.route('/')
      .post(requireAuth, pdfController.createPdf);

  return pdfRouter;
};

module.exports = routes;
