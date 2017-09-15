"use strict";

const  uranus= {
		Name: "Uranus", 
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
  `<div id="uranusDiv">
  <h2>Name:${uranus.Name}</h2>
  <h2>Discovered: ${uranus.Discovered}</h2>
  <h2>Mass: ${uranus.Mass}</h2>
  <h2>Volume: ${uranus.Volume}</h2>
  <h2>Distance: ${uranus.Distance}</h2>
  <h2>Atmosphere: ${uranus.Atmosphere}</h2>
  <h2>Satellites: ${uranus.Satellites}</h2>
  <h2>SunDistance: ${uranus.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;