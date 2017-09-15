"use strict";

const  earth = {
		Name: "Earth", 
		Discovered: "6000 years ago according to creationists",
    Mass: "5.9724 x 10^24 kg",
    Volume: "1.0832 x 10^12 km^3",
    OrbitalDistance: "150 million km",
    Atmosphere: "Nitrogen, oxygen, water, argon, CO2",
    Satellites: "Moon",
    Probes: "Everything ever created by humans",
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <p>Name: ${earth.Name}</p>
  <p>Discovered: ${earth.Discovered}</p>
  <p>Mass: ${earth.Mass}</p>
  <p>Volume: ${earth.Volume}</p>
  <p>Distance: ${earth.Distance}</p>
  <p>Atmosphere: ${earth.Atmosphere}</p>
  <p>Satellites: ${earth.Satellites}</p>
  <p>SunDistance: ${earth.SunDistance}</p>
  </div>`;
};


module.exports = outputTo;