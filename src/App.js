import logo from './logo.svg';
import './App.css';
import { Student } from "./util";

import {useState} from "react";

let Christopher = new Student("Christopher Robles", 17);

function ButtonContainer(props) {

  const [count, setCount] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setCount(count + 1);
    alert('You clicked the button! ' +  count + " times");
  }

  function handleHover(e) {
    e.preventDefault();
    alert('You hovered over the button!');
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onMouseOver={handleHover}>Hover here</button>
      <h1>{Christopher.name}</h1>
      <h2>{Christopher.age}</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ButtonContainer name="Christopher Robles" />
    </div>
  );
}

export default App;
