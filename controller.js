const DeviceName = 'Nana' // Speaker Name from Sonos Controller
const MaxVolume = 40 // Maximum Volume in percent

// Don't modify below this line

const Sonos = require('sonos').Sonos
const DeviceDiscovery = require('sonos').DeviceDiscovery
const URL = require('url').URL
const jsonQuery = require('json-query')

// Discover the Device needed
function MonitorSpeaker(SpeakerName, callback) {
  DeviceDiscovery({
    timeout: 5000
  }).once('DeviceAvailable', (device) => {
    device.getTopology().then(jsondata => {
      var _result = jsonQuery(`zones[name=${DeviceName}].location`, {
        data: jsondata
      }).value
      if (_result != null) {
        _result = _result.toString()
        const myURL = new URL(_result);
        var ip = myURL.hostname.toString()
      } else {
        var ip = null
      }
      callback(ip)
    })
  })
}

MonitorSpeaker(DeviceName, function(SonosIP) {

  if (SonosIP == null) {
    console.log("Speaker not found - please change DeviceName variable");
    process.exit(0)
  }

  const device = new Sonos(SonosIP);

  console.log('Sonos Volume limiter started')
  console.log('Found Speaker ' + DeviceName + ' at ip: ' + SonosIP)
  console.log('Max volume set to: ' + MaxVolume + '%')
  console.log('Listen for Sonos Volume events. CTRL + C to exit')
  console.log('==========================')

  device.on('Volume', volume => {
    if (volume > MaxVolume) {
      console.log(`Volume too high: ${volume} adjusting to ${MaxVolume}`)
      device.setVolume(MaxVolume)
    } else {
      console.log(`Current volume is ${volume} which is below ${MaxVolume} - waiting for next event`)
    }
  })
});