"use strict";

const  mars = {
		Name: "Mars", 
		Discovered: "A long time ago", 
		Mass: "5.9724 x 10^24 kg", 
		Volume: "1.0832 x 10^12 km^3", 
		Distance: "150 million km", 
		Atmosphere: "Nitrogen, oxygen, water, argon, CO2",
		Satellites: "Moon, Probes: people, Size: pretty large", 
		SunDistance: "a long way"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="marsDiv">
  <h2>Name:${mars.Name}</h2>
  <h2>Discovered: ${mars.Discovered}</h2>
  <h2>Mass: ${mars.Mass}</h2>
  <h2>Volume: ${mars.Volume}</h2>
  <h2>Distance: ${mars.Distance}</h2>
  <h2>Atmosphere: ${mars.Atmosphere}</h2>
  <h2>Satellites: ${mars.Satellites}</h2>
  <h2>SunDistance: ${mars.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;
