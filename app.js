var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'nest',
    adaptor: 'nest',
    accessToken: 'ZujG9R3bJVoGnuNLHzXVPsmhJeUc',
  },

  device: {
    name: 'thermostat',
    driver: 'nest-thermostat',
    deviceId: 'XXX'
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
