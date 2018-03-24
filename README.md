# Sonos Volume Controller (Parental Control)

A simple Kids' Parental control of the MAX volume of a Sonos Speaker

I saw the forum post on Sonos.com [Read here](https://en.community.sonos.com/controllers-software-228995/volume-limit-feature-4412144) and was very annoyed that there was no easy fix to this problem.

Requires [Node.JS](https://nodejs.org/en/) and edit the controller.js file and adjust the Name of the speaker you want to control

Simple start with "node controller.js" and it will check in defined interval

## Configuration

You can modify all variables in the top of the controller.js file

*  const DeviceName = (The Name of your speaker)
*  const MaxVolume = (Max volume in Percent 1-100)
*  const ScanInterval = (Interval in Miliseconds ex. 10000 for 10 seconds)

# Todo

*  Better error handling on DeviceDiscovery

# Author

Christian Pedersen
Mail: christian@jagtvej14.dk
Twitter: zentura_cp
