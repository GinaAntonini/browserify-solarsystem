"use strict";

const  venus = {
		Name: "Venus", 
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
  `<div id="venusDiv">
  <h2>Name:${venus.Name}</h2>
  <h2>Discovered: ${venus.Discovered}</h2>
  <h2>Mass: ${venus.Mass}</h2>
  <h2>Volume: ${venus.Volume}</h2>
  <h2>Distance: ${venus.Distance}</h2>
  <h2>Atmosphere: ${venus.Atmosphere}</h2>
  <h2>Satellites: ${venus.Satellites}</h2>
  <h2>SunDistance: ${venus.SunDistance}</h2>
  </div>`;
};


module.exports = outputTo;