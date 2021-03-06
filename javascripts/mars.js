"use strict";

const  mars = {
		Name: "Mars", 
		Discovered: "Prehistory",
    Mass: "6.4171 x 10^23 kg",
    Volume: "1.6318 x 10^11 km^3",
    Distance: "228 million km",
    Atmosphere: "CO2, argon, nitrogen, oxygen, CO",
    Satellites: "Phobos, Deimos (fear and dread, mythical sons of Mars (war) which accompanied him)",
    Probes: "various Mariner and Mars probes, Viking 1 and 2, Mars Global Surveyor, Mars Pathfinder, Sojourner, 2001 Mars Odyssey, Mars Express, Spirit, Opportunity, Mars Reconnaissance Orbiter, Phoenix, Dawn, Curiosity, Mars Orbiter Mission, MAVEN, ExoMars TGO, Schiaparelli"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <section class="planetContent">
  <p>Name: ${mars.Name}</p>
  <p>Discovered: ${mars.Discovered}</p>
  <p>Mass: ${mars.Mass}</p>
  <p>Volume: ${mars.Volume}</p>
  <p>Distance: ${mars.Distance}</p>
  <p>Atmosphere: ${mars.Atmosphere}</p>
  <p>Satellites: ${mars.Satellites}</p>
  <p>Probes: ${mars.Probes}</p>
  </section>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mars_Valles_Marineris_d%C3%A9tour%C3%A9.png">
  </div>`;
};


module.exports = outputTo;
