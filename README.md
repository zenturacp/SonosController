# Sonos Volume Controller (Parental Control)

A simple Kids' Parental control of the MAX volume of a Sonos Speaker

I saw the forum [post](https://en.community.sonos.com/controllers-software-228995/volume-limit-feature-4412144) on Sonos.com and was very annoyed that there was no easy fix to this problem.

Requires [Node.JS](http://www.nodejs.org) and edit the controller.js file and adjust the Name of the speaker you want to control.

Simple start with "node controller.js" and it will subscribe to event from the speaker.

## Configuration

You can modify all variables in the top of the controller.js file

*  const DeviceName = (The Name of your speaker)
*  const MaxVolume = (Max volume in Percent 1-100)

# Todo / Roadmap

-  Better error handling on DeviceDiscovery
 - It sometimes causes an error when the script starts
- WebInterface
- Multi Speaker (More than just 1 speaker monitored)

# Author

Christian Pedersen

Mail: christian@jagtvej14.dk

Twitter: zentura_cp
