"use strict";

const MySolarSystem = require('./solarSystemOutput');

let divForSolarSystem = document.getElementById("solarSystemDiv");

MySolarSystem.earth(divForSolarSystem);
MySolarSystem.jupiter(divForSolarSystem);
MySolarSystem.mars(divForSolarSystem);
MySolarSystem.mercury(divForSolarSystem);
MySolarSystem.neptune(divForSolarSystem);
MySolarSystem.saturn(divForSolarSystem);
MySolarSystem.uranus(divForSolarSystem);
MySolarSystem.venus(divForSolarSystem);
