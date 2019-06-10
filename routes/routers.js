var express = require('express');
var NTLAPIHeader = require('../extensions/NTLAPIHeader');
var router = express.Router();

router.all('/:api/:version/:controller', function(req, res) {

	if (req.params.api != process.env.API_NAME) res.send(404);
	
	try {
		var controller = require(`../controllers/${req.params.version}/${req.params.controller}Controller.js`);
		res.send(controller.actionIndex(req, res));
	} catch (err) {
		res.send(err);
	}

});

router.all('/alive', function(req, res){

	let body = '{"alive":true,"version":"1.0.0.0"}';
	res.set('Content-Type', NTLAPIHeader.contenttype);
	res.set('responsecode', 200);
	res.set('responsemessage', 'Success');
	res.set('responsedatasource', '');
	res.send(body);

});

module.exports = router;