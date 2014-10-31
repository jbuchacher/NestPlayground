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
    deviceId: process.env.NEST_API_THERMOSTAT_DEVICE_ID
  },

  work: function(my) {

    var thermostat = my.thermostat;
    thermostat.on('status', function (thermostat) {
      console.log(thermostat.ambient_temperature_f);
    });
  }
}).start();
