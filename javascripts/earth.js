"use strict";

const  earth = {
		Name: "earth", 
		Discovered: "Way long ago!", 
		Mass: "5.9724 x 10^24 kg", 
		Volume: "1.0832 x 10^12 km^3", 
		Distance: "150 million km", 
		Atmosphere: "Nitrogen, oxygen, water, argon, CO2",
		Satellites: "Moon, Probes: people, Size: pretty large", 
		SunDistance: "a long way"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="earthDiv">
  <h2>Name:${earth.Name}</h2>
  <h2>Discovered: ${earth.Discovered}</h2>
  <h2>Mass: ${earth.Mass}</h2>
  <h2>Volume: ${earth.Volume}</h2>
  <h2>Distance: ${earth.Distance}</h2>
  <h2>Atmosphere: ${earth.Atmosphere}</h2>
  <h2>Satellites: ${earth.Satellites}</h2>
  <h2>SunDistance: ${earth.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;