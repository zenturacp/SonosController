const DeviceName = 'Nana' // Speaker Name from Sonos Controller
const MaxVolume = 40 // Maximum Volume in percent
const ScanInterval = 10000 // Miliseconds

const {
  Sonos
} = require('sonos')
const {
  DeviceDiscovery
} = require('sonos')
const {
  URL
} = require('url');
const jsonQuery = require('json-query')

// find one device
function MonitorSpeaker(SpeakerName, callback) {
  DeviceDiscovery({
    timeout: 5000
  }).once('DeviceAvailable', (device) => {
    // console.log('found device at ' + device.host)
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
    exit
  }

  const device = new Sonos(SonosIP);

  console.log('Sonos Volume limiter started')
  console.log('Found Speaker ' + DeviceName + ' at ip: ' + SonosIP)
  console.log('Max volume set to: ' + MaxVolume + '%')
  console.log('Scan interval set to: ' + ScanInterval + 'ms')
  console.log('==========================')

  function AdjustVolume() {
    device.getVolume().then(volume => {
      if (volume > MaxVolume) {
        console.log(`Volume too high: ${volume} adjusting to ${MaxVolume}`)
        device.setVolume(MaxVolume)
      } else {
        console.log(`Current volume is ${volume} which is below ${MaxVolume} - sleeping`)
      }
    })
  }

  AdjustVolume()
  setInterval(AdjustVolume, ScanInterval)

});
