"use strict";

const  neptune = {
		Name: "Neptune", 
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
  `<div id="neptuneDiv">
  <h2>Name:${neptune.Name}</h2>
  <h2>Discovered: ${neptune.Discovered}</h2>
  <h2>Mass: ${neptune.Mass}</h2>
  <h2>Volume: ${neptune.Volume}</h2>
  <h2>Distance: ${neptune.Distance}</h2>
  <h2>Atmosphere: ${neptune.Atmosphere}</h2>
  <h2>Satellites: ${neptune.Satellites}</h2>
  <h2>SunDistance: ${neptune.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;