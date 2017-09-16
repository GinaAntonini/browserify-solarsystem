"use strict";

const  saturn = {
		Name: "Saturn", 
		Discovered: "Prehistory",
    Mass: "5.6836 x 10^26 kg",
    Volume: "8.2713 x 10^14 km^3",
    Distance: "1.4 billion km",
    Atmosphere: "hydrogen, helium, methane, trace gases",
    Satellites: "62 known - Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Hyperion, Iapetus, Phoebe, Janus, Epimetheus, Helene, Telesto, Calypso, Atlas, Prometheus, Pandora, Pan, Ymir, Paaliaq, Tarvos, Ijiraq, Suttungr, Kiviuq, Mundilfari, Albiorix, Skathi, Erriapus, Siarnaq, Thrymr, Narvi, Methone, Pallene, Polydeuces, Daphnis, Aegir, Bebhionn, Bergelmir, Bestla, Farbauti, Fenrir, Fornjot, Hati, Hyrrokkin, Kari, Loge, Skoll, Surtur, Anthe, Jarnsaxa, Greip, Tarqeq, Aegaeon, 9 more unnamed",
    Probes: "Pioneer 11, Voyager 1 and 2, Cassini"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <section class="planetContent">
  <p>Name: ${saturn.Name}</p>
  <p>Discovered: ${saturn.Discovered}</p>
  <p>Mass: ${saturn.Mass}</p>
  <p>Volume: ${saturn.Volume}</p>
  <p>Distance: ${saturn.Distance}</p>
  <p>Atmosphere: ${saturn.Atmosphere}</p>
  <p>Satellites: ${saturn.Satellites}</p>
  <p>Probes: ${saturn.Probes}</p>
  </section>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Saturnx.png">
  </div>`;
};


module.exports = outputTo;