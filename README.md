# SonosController

A simple Kids' Parental control of the MAX volume of a Sonos Speaker

Requires Node and edit the controller.js file and ajust the IP address of the speaker you want to control

Simple start with node controller.js and it will check every 10 seconds

## Configuration

You can modify all variables in the top of the controller.js file

*  const SonosIP = (IP Address ex. '192.168.1.100')
*  const MaxVolume = (Max volume in Percent 1-100)
*  const ScanInterval = (Interval in Miliseconds ex. 10000 for 10 seconds)
