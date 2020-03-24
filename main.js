//https://stackoverflow.com/questions/20445599/auto-start-node-js-server-on-boot

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.1.105:1883');

var state = 'closed';

client.on('connect', () => {
	client.publish('pc/heartbeat', 'true');
});

function sendHeartbeat() {
	client.publish('pc/heartbeat', 'true');
}

setInterval(sendHeartbeat, 30 * 1000);
