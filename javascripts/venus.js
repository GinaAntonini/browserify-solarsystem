"use strict";

const  venus = {
		Name: "Venus", 
    Discovered: "Prehistory",
    Mass: "4.8675 x 10^24 kg",
    Volume: "9.2843 x 10^11 km^3",
    Distance: "108 million km",
    Atmosphere: "carbon dioxide, nitrogen, trace gases",
    Satellites: "none",
    Probes: "various Venera and Mariner, Vega 1 and 2, Magellan, Venus Express, Akatsuki, IKAROS"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <section class="planetContent">
  <p>Name: ${venus.Name}</p>
  <p>Discovered: ${venus.Discovered}</p>
  <p>Mass: ${venus.Mass}</p>
  <p>Volume: ${venus.Volume}</p>
  <p>Distance: ${venus.Distance}</p>
  <p>Atmosphere: ${venus.Atmosphere}</p>
  <p>Satellites: ${venus.Satellites}</p>
  <p>Probes: ${venus.Probes}</p>
  </section>
  <img src="http://space-facts.com/wp-content/uploads/venus.png">
  </div>`;
};


module.exports = outputTo;