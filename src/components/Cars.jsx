import React from "react";
import car from "../practice";


function Car(){
  let [honda, tesla] = car;
console.log(tesla);
let {model,coloursByPopularity,speedStats} = honda;
// console.log(coloursByPopularity);

let hondaTopColour = coloursByPopularity;
// let hondaSpeed = honda.speedStats;
let hondaTopSpeed= speedStats.topSpeed;
// console.log(hondaTopSpeed);
let teslaTopColour = tesla.coloursByPopularity;
let teslaTopSpeed = tesla.speedStats.topSpeed;

return (
  <table>
  <thead>
  <tr>
    <th>Brand</th>
    <th>Top Speed</th>
  </tr>
  </thead>
  <tbody>


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
  </tbody>
</table>
)
}
export default Car;