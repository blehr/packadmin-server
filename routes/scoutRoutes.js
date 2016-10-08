var express = require('express');

const routes = function(Scout) {
    const scoutRouter = express.Router();
    const scoutController = require('../controllers/scout.server.controller')(Scout);
    
    scoutRouter.route('/scouts')
        .get(scoutController.getAll);
        
    scoutRouter.route('/scouts/add')
        .post(scoutController.addScout);

    scoutRouter.route('/scouts/update/:id')
        .post(scoutController.updateScout);
    
    scoutRouter.route('/scouts/detail/:id')
        .get(scoutController.findById);
        
    scoutRouter.route('/scouts/remove/:id')
        .post(scoutController.removeById);
    
    return scoutRouter;
};

module.exports = routes;

