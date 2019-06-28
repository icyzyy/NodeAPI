const terminal = require('child_process');
const decimal = 2;

const Sequelize = require('sequelize');
let dbres = '';

// Option 2: Passing a connection URI
const sequelize = new Sequelize('Test', 'root@%', 'aA@094013783', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});
const run = (req, res) => {
	console.log('test');
	let memUsed = parseFloat(terminal.execSync("awk -v CONVFMT='%.2f' '/MemTotal/{t=$2}/MemAvailable/{a=$2}END{print 100-100*a/t}' /proc/meminfo")).toFixed(decimal);
	let cpuUsed = parseFloat(terminal.execSync("(grep 'cpu ' /proc/stat;sleep 0.1;grep 'cpu ' /proc/stat)|awk -v RS=\"\" '{print ($13-$2+$15-$4)*100/($13-$2+$15-$4+$16-$5)}'")).toFixed(decimal);
	let test = {
		microserviceHealthCheckInfo: {
			microserviceName: process.env.API_NAME,
			databaseConnection: '',
			databaseConnectionMessage: '',
			cpuUsed: cpuUsed+'%',
			memoryUsed: memUsed+'%',
			processName: 'nodeJs',
			checkingTime: new Date().toISOString().replace('Z','+07:00'),
		}
	};
	console.log(test);
	let mysql = await sequelize.query('SELECT * FROM test2');
	console.log(mysql);
};


module.exports = {run};