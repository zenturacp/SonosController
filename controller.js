const SonosIP = '10.15.25.113'
const MaxVolume = 40
const ScanInterval = 10000 // Miliseconds
const {
  Sonos
} = require('sonos')
const device = new Sonos(SonosIP);

console.log('Sonos Volume limiter started')
console.log('Connecting to ip: ' + SonosIP)
console.log('Max volume set to: ' + MaxVolume + '%')
console.log('Scan interval set to: ' + ScanInterval + 'ms')
console.log('==========================')

device.get

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