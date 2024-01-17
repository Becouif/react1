import logo from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting";
import Pi, {doublePi, triplePi} from "./components/Math";
import * as Random from "./components/Random";
import Car from "./components/Cars";



function App() {
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







    </div>
  );
}

export default App;
