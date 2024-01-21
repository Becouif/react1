import React from "react";
import car from "../practice";
// import AnimalWork from "./destructing-cars-animal";

// you can change the name of the obj in destructuring that you want to by adding : 

// e.g 



function Car(){
  const [honda, tesla] = car;
// NOTE- : is use to assign name 
// while :[] or :{} is use for destructing 
const {coloursByPopularity:[hondaTopColour],speedStats: {topSpeed:hondaTopSpeed }} = honda;

const {coloursByPopularity:[teslaTopColour], speedStats:{topSpeed:teslaTopSpeed}} = tesla;

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
  <tfoot>
    {/* <AnimalWork /> */}
  </tfoot>
</table>
)
}
export default Car;