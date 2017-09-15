"use strict";

const  mercury = {
		Name: "Mercury", 
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
  `<div id="mercuryDiv">
  <h2>Name:${mercury.Name}</h2>
  <h2>Discovered: ${mercury.Discovered}</h2>
  <h2>Mass: ${mercury.Mass}</h2>
  <h2>Volume: ${mercury.Volume}</h2>
  <h2>Distance: ${mercury.Distance}</h2>
  <h2>Atmosphere: ${mercury.Atmosphere}</h2>
  <h2>Satellites: ${mercury.Satellites}</h2>
  <h2>SunDistance: ${mercury.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;