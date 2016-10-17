const express = require('express');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const routes = function routes(Scout) {
  const scoutRouter = express.Router();
  const scoutController = require('../controllers/scout.server.controller')(Scout);

  scoutRouter.route('/')
      .get(requireAuth, scoutController.getAll);

  scoutRouter.route('/add')
      .post(requireAuth, scoutController.addScout);

  scoutRouter.route('/detail/:id')
      .get(requireAuth, scoutController.findById)
      .put(requireAuth, scoutController.updateScout)
      .delete(requireAuth, scoutController.removeById);

  return scoutRouter;
};

module.exports = routes;
