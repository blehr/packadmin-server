const express = require('express');

const routes = function routes(Scout) {
  const scoutRouter = express.Router();
  const scoutController = require('../controllers/scout.server.controller')(Scout);

  scoutRouter.route('/')
      .get(scoutController.getAll);

  scoutRouter.route('/add')
      .post(scoutController.addScout);

  scoutRouter.route('/detail/:id')
      .get(scoutController.findById)
      .put(scoutController.updateScout)
      .delete(scoutController.removeById);

  return scoutRouter;
};

module.exports = routes;
