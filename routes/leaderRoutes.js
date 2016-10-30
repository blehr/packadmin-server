const express = require('express');
const passport = require('passport');
const passportService = require('../services/passport');

const leaderRouter = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

const routes = function routes(Scout) {
  const leaderController = require('../controllers/leader.server.controller')(Scout);

  leaderRouter.route('/')
      .get(requireAuth, leaderController.getAll);

  leaderRouter.route('/add')
      .post(requireAuth, leaderController.addLeader);

  leaderRouter.route('/detail/:id')
      .get(requireAuth, leaderController.findById)
      .put(requireAuth, leaderController.updateLeader)
      .delete(requireAuth, leaderController.removeById);

  return leaderRouter;
};

module.exports = routes;
