"use strict";

const  neptune = {
		Name: "Neptune", 
    Discovered: "1846, Johann Galle and Urbain Le Verrier",
    Mass: "1.0243 x 10^26 kg",
    Volume: "6.254 x 10^13 km^3",
    Distance: "4.5 billion km",
    Atmosphere: "hydrogen, helium, methane, trace gases",
    Satellites: "14 known - Naiad, Thalassa, Despina, Galatea, Larissa, Proteus, Triton, Nereid, Halimede, Sao, Laomedeia, Psamathe, Neso, 1 unnamed",
    Probes: "Voyager 2"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <section class="planetContent">
  <p>Name: ${neptune.Name}</p>
  <p>Discovered: ${neptune.Discovered}</p>
  <p>Mass: ${neptune.Mass}</p>
  <p>Volume: ${neptune.Volume}</p>
  <p>Distance: ${neptune.Distance}</p>
  <p>Atmosphere: ${neptune.Atmosphere}</p>
  <p>Satellites: ${neptune.Satellites}</p>
  <p>Probes: ${neptune.Probes}</p>
  </section>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neptune_cutout.png/776px-Neptune_cutout.png">
  </div>`;
};


module.exports = outputTo;