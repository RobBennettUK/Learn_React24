import animals, { useAnimals } from "./data";

console.log(animals);
// The names you use to destructure must be unique
// Here we destructure an array into objects
let [cat, dog] = animals;
console.log(dog);
// Here we can destructure an object. We need to use {}
// Another important distinction is you must use the names found within the object
// You cannot make up your own key
let { name, sound } = cat;
console.log(name);
console.log(sound);

// You can rename the variables if you wish
let { name: catName, catSound } = cat;
console.log(catName);

// You can provide a default value if you want
// This means, if name is undefined in the JSON, it will use this value instead
let { name: name2 = "Fluffy", sound: sound2 = "Purr" } = cat;
console.log(name2);

// Destructuring nested objects (i.e. an object within an object)
const { name: name3, sound: sound3, feedingRequirements } = cat;
console.log(feedingRequirements);
const {
  name: name4,
  sound: sound4,
  feedingRequirements: { food, water }
} = cat;
console.log(food);

// We can destructure an array with a function in. See how this is made in the data tab
console.log(useAnimals(cat));
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Cars from "./practice";

const [honda, tesla] = Cars;
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

// My Attempt:
// let [honda, tesla] = Cars;
// let {
//   odel,
//   coloursByPopularity: { 0: hondaTopColour },
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;
// let {
//   model,
//   coloursByPopularity: { 0: teslaTopColour },
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
