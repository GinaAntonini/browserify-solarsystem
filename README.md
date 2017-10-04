# Browserify Solar System

#### Requirements for Browserify Solar System:

You'll be creating a web page that will display important scientific data about all eight planets in our solar system. The information about each planet will be separate modules.

Each module will export a single function named outputTo that will accept a single argument. That argument's value will be the DOM element reference into which it will insert information about a planet.
```
function outputTo(domElement) {
  domElement.innerHTML += ...;
}
```
Each module should output the following information:

-[x] Name

-[x] Year discovered

-[x] Mass

-[x] Size

-[x] Distance from Sun

-[x] Atmosphere composition

-[x] Satellites

-[x] Name of any probes/orbiters/explorers that have visited or landed on that planet

Create a main module that uses require to include each planet's module as a dependency and then subsequently calls the outputTo() method for each one, in the right order.



##


### Contributors:

 * [Gina Antonini](https://github.com/ginaantonini)

