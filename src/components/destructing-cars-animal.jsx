import {animals} from '../practice';




function animalWork(){
  // DESTRUCT ARRAY 
  // you can assign any name to array destruct 
  const [dog, cat] = animals;


  // DESTRUCT OBJECT 
  // to destructure an obj the name of the destruct must be similiar to the name coming from the JSON or obj 
  // but by add : to the front you can rename the destruct name  e.g
  // const {name: myName, sound: mySound} = dog; 
  const {name, sound} = dog;
  const {name:catName, sound:catSound} = cat
  // console.log(catSound);

  // FOR EXAMPLE 
  // to declare if a column in the OBJ is there or else use this value as the column value 
  // const {name = "Flurry", sound}= dog; 

  // destrucing can be done like this too if there are nested obj in the obj 

  // const {name, sound, feddingRequirements:{food,time}}= cat; 


  // NOTE NOTE NOTE 
// function useAnimals is created similar to react hook method 
// example of how react state is implemented in basic format 
function useAnimals(animal){
  return [
    animal.name,
    function() {
      console.log(animal.sound)
    }
  ]
}

//const [animal,makeSOund] = useAnimals(cat);
// console.log(animal) 

}



export default animalWork;