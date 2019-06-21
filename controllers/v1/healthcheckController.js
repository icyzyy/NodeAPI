const os = require('os');
const terminal = require('child_process');


const actionIndex = (req, res) => {
	let commandMem = terminal.execSync('free -b | grep "Mem"').toString().replace(/ +/gi, ",").split(",");
	let memUsed = (parseInt(commandMem[2])/parseInt(commandMem[1])*100).toFixed(2)+'%';
	let commandCpu = terminal.execSync('vmstat').toString().split(" ");
	let cpuUsed = os.cpus();
	res.send(cpuUsed);
};


module.exports = {actionIndex};