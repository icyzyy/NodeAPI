var express = require('express');
var router = express.Router();
var maincontroller = require('../controllers/Controller');

router.all('/:api/:version/:controller', function(req, res) {

	maincontroller.beforeAction;

	if (req.params.api != process.env.API_NAME) res.send(404);
	
	try {
		var controller = require(`../controllers/${req.params.version}/${req.params.controller}Controller.js`);
		res.send(controller.actionIndex(req, res));
	} catch (err) {
		res.send(err);
	}

	maincontroller.afterAction;

});

router.all('/alive', maincontroller.alive);

module.exports = router;