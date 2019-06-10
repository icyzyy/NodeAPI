const actionIndex = (req, res) => {
	res.send(process.env.API_NAME);
};

module.exports = {actionIndex};