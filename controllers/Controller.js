var express = require('express');
var NTLAPIHeader = require('../extensions/NTLAPIHeader');

const alive = (req, res) => {
	let body = '{"alive":true,"version":"1.0.0.0"}';
	res.set('Content-Type', NTLAPIHeader.contenttype);
	res.set('responsecode', 200);
	res.set('responsemessage', 'Success');
	res.set('responsedatasource', '');
	res.send(body);
};

const beforeAction = (req, res) => {

};

const afterAction = (req, res) => {

};

module.exports = {
	alive,
	beforeAction,
	afterAction
};