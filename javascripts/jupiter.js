"use strict";

const  jupiter = {
		Name: "Jupiter", 
		Discovered: "Prehistory",
    Mass: "1.8986 x 10^27 kg",
    Volume: "1.4313 x 10^15 km^3",
    OrbitalDistance: "778 million km",
    Atmosphere: "hydrogen, helium, methane, ammonia, trace gases",
    Satellites: "69 known - Io, Europa, Ganymede, Callisto, Amalthea, Himalia, Elara, Pasiphae, Sinope, Lysithea, Carme, Ananke, Leda, Thebe, Adrastea, Metis, Callirrhoe, Themisto, Megaclite, Taygete, Chaldene, Harpalyke, Kalyke, Iocaste, Erinome, Isonoe, Praxidike, Autonoe, Thyone, Hermippe, Aitne, Eurydome, Euanthe, Euporie, Orthosie, Sponde, Kale, Pasithee, Hegemone, Mneme, Aoede, Thelxinoe, Arche, Kallichore, Helike, Carpo, Eukelade, Cyllene, Kore, Herse, Dia, 18 more unnamed",
    Probes: "Pioneer 10 and 11, Voyager 1 and 2, Ulysses, Galileo, Cassini, New Horizons, Juno"
};

const outputTo = (domElement) => {
  domElement.innerHTML += 
  `<div id="planetDiv">
  <p>Name: ${jupiter.Name}</p>
  <p>Discovered: ${jupiter.Discovered}</p>
  <p>Mass: ${jupiter.Mass}</p>
  <p>Volume: ${jupiter.Volume}</p>
  <p>Distance: ${jupiter.Distance}</p>
  <p>Atmosphere: ${jupiter.Atmosphere}</p>
  <p>Satellites: ${jupiter.Satellites}</p>
  <p>SunDistance: ${jupiter.SunDistance}</p>
  </div>`;
};


module.exports = outputTo;