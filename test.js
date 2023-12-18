// Replace 'YOUR_TOPIC' with the topic you want to subscribe to
const topic = 'yogiazy/dev';

// Connect to the MQTT broker
const client = mqtt.connect('test.mosquitto.org:1883'); // Use wss for secure connection

// Set up event handler for successful connection
client.on('connect', function () {
    console.log('Connected to MQTT broker');

    // Subscribe to the specified topic
    client.subscribe(topic);
});

// Set up event handler for incoming messages
client.on('message', function (topic, message) {
    console.log(`${topic}: ${message.toString()}`);
    document.getElementById('myApp').textContent  = `${topic}: ${message.toString()}`;
});