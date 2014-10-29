var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'nest',
    adaptor: 'nest',
    accessToken: process.env.NEST_API_ACCESS_TOKEN,
  },

  device: {
    name: 'thermostat',
    driver: 'nest-thermostat',
    deviceId: process.env.NEST_API_CLIENT_ID
  },

  work: function(my) {
    // Listen to the status event to obtain all thermostat
    // related data in a single object.
    my.thermostat.on('status', function(data) {
      console.log('The Thermostat at a glance--->', data);
    });

    every((60).seconds(), function(){
      console.log('NEST ambient temp C:', my.thermostat.ambientTemperatureC());
      console.log('NEST ambient temp F:', my.thermostat.ambientTemperatureF());
    });
  }
}).start();
