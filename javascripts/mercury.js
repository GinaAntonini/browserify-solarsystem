"use strict";

const  mercury = {
		Name: "Mercury", 
		Discovered: "Prehistory",
    Mass: "3.3011x10^23 kg",
    Volume: "6.083x10^10",
    OrbitalDistance: "57 million km",
    Atmosphere: "oxygen, sodium, hydrogen, helium, potassium, trace gases",
    Satellites: "none",
    Probes: "Mariner 10, MESSENGER"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <p>Name: ${mercury.Name}</p>
  <p>Discovered: ${mercury.Discovered}</p>
  <p>Mass: ${mercury.Mass}</p>
  <p>Volume: ${mercury.Volume}</p>
  <p>Distance: ${mercury.Distance}</p>
  <p>Atmosphere: ${mercury.Atmosphere}</p>
  <p>Satellites: ${mercury.Satellites}</p>
  <p>SunDistance: ${mercury.SunDistance}</p>
  </div>`;
};


module.exports = outputTo;