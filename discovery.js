const {
  DeviceDiscovery
} = require('sonos')

// find one device
DeviceDiscovery({
  timeout: 5000
}).once('DeviceAvailable', (device) => {
  console.log('found device at ' + device.host)
  device.getTopology().then(console.log)
})