import logo from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting";
import Pi, {doublePi, triplePi} from "./components/Math";
import * as Random from "./components/Random";
import Car from "./components/Cars";
// import myEvent from "./components/Event-handle.jsx";
import MyEvent from './components/MyEvent';
import { useState } from 'react';




function App() {
  const [headingText, setHeadingText] = useState('hello');
  // we use the state of mouse over to set the color of the btn in MyEvent.jsx 
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");



function handleClick(event){
  setHeadingText(name);
  event.preventDefault();
}

function handleMouseOver(){
  setMouseOver(true);
}
function handleMouseOut(){
  setMouseOver(false)
}

function handleChange(event){
  // console.log(event.target.value);
  // console.log(event.target.type)
  setName(event.target.value);
}


  return (
    <div className="App">
      <header className="App-header">
      {/* add svg or to img  */}
        <img src={logo} className="App-logo" alt="logo" />

        <main>
          <Greeting />
        </main>


      </header>
      {/* example of import and export in ES6  */}
      <span>
      <ul>
        <li>{Pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
      </ul>
      {/* end of example 1  */}
        <br /><br />


      {/* start of import and export ES6 example 2  */}
      <ol>
        <li>{Random.randomOne()}</li>
        <li>{Random.randomTwo()}</li>
      </ol>
      {/* end of second example  */}
      </span>

      {/* Car components  */}
      <Car />

      {/* event handleing in React conponent */}

      <MyEvent
      submit={handleClick}
      change={handleChange}
       heading={headingText} 

      mouseOut={handleMouseOut} 
      mouseOver={handleMouseOver} 
      mystyle={{backgroundColor: isMouseOver ? "black" : "white"}} 
      myname={name}
      myvalue={name}
      />





    </div>
  );
}

export default App;
