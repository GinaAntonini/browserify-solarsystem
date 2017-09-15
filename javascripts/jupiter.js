"use strict";

const  jupiter = {
		Name: "Jupiter", 
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
  `<div id="jupiterDiv">
  <h2>Name:${jupiter.Name}</h2>
  <h2>Discovered: ${jupiter.Discovered}</h2>
  <h2>Mass: ${jupiter.Mass}</h2>
  <h2>Volume: ${jupiter.Volume}</h2>
  <h2>Distance: ${jupiter.Distance}</h2>
  <h2>Atmosphere: ${jupiter.Atmosphere}</h2>
  <h2>Satellites: ${jupiter.Satellites}</h2>
  <h2>SunDistance: ${jupiter.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;