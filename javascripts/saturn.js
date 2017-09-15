"use strict";

const  saturn = {
		Name: "Saturn", 
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
  `<div id="saturnDiv"><h2>Name:${saturn.Name}</h2>
  <h2>Discovered: ${saturn.Discovered}</h2>
  <h2>Mass: ${saturn.Mass}</h2>
  <h2>Volume: ${saturn.Volume}</h2>
  <h2>Distance: ${saturn.Distance}</h2>
  <h2>Atmosphere: ${saturn.Atmosphere}</h2>
  <h2>Satellites: ${saturn.Satellites}</h2>
  <h2>SunDistance: ${saturn.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;