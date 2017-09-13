(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const outputEarth = () => {
	// return "Name: Earth
// Year discovered: We cannot self-identify the year
// Mass
// Size
// Distance from Sun
// Atmosphere composition
// Satellites
// Name of any probes/orbiters/explorers that have visited or landed on that planet"
};

module.exports = outputEarth;
},{}],2:[function(require,module,exports){
"use strict";
},{}],3:[function(require,module,exports){
"use strict";

const earth = require('./earth');
const jupiter = require('./jupiter');
const mars = require('./mars');
const mercury = require('./mercury');
const neptune = require('./neptune');
const saturn = require('./saturn');
const uranus = require('./uranus');
const venus = require('./venus');

const solarSystem = {
	earth, jupiter, mars, mercury, neptune, saturn, uranus, venus
};

module.exports = solarSystem;
},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./saturn":7,"./uranus":8,"./venus":9}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],6:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],7:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],8:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],9:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[3]);
