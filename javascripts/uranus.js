"use strict";

const  uranus= {
		Name: "Uranus", 
		Discovered: "1781, William Herschel",
    Mass: "8.6810 x 10^25 kg",
    Volume: "6.833 x 10^13 km^3",
    Distance: "2.9 billion km",
    Atmosphere: "hydrogen, helium, methane, trace gases",
    Satellites: "27 known - Ariel, Umbriel, Titania, Oberon, Miranda, Cordelia, Ophelia, Bianca, Cressida, Desdemona, Juliet, Portia, Rosalind, Belinda, Puck, Caliban, Sycorax, Prospero, Setebos, Stephano, Trinculo, Francisco, Margaret, Ferdinand, Perdita, Mab, Cupid",
    Probes: "Voyager 2"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <section class="planetContent">
  <p>Name: ${uranus.Name}</p>
  <p>Discovered: ${uranus.Discovered}</p>
  <p>Mass: ${uranus.Mass}</p>
  <p>Volume: ${uranus.Volume}</p>
  <p>Distance: ${uranus.Distance}</p>
  <p>Atmosphere: ${uranus.Atmosphere}</p>
  <p>Satellites: ${uranus.Satellites}</p>
  <p>Probes: ${uranus.Probes}</p>
  </section>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Uranus2-transparent.png">
  </div>`;
};


module.exports = outputTo;