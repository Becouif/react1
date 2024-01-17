// import React from "react";s

function randomOne(){
  return Math.floor(Math.random() * 10);

}
function randomTwo(){
  return Math.floor(Math.random() * (999 - 100) + 100);
}


export {randomOne,randomTwo}