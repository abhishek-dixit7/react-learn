import { Component1 } from "./Components/FunctionalComponents";
import Component2 from "./Components/ClassComponents";
import logo from "./logo.svg";
import ChildComponent from "./Components/ChildComponent";
//import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hellow World! This is a check post deployment</h1>
      <Component1 />
      <Component2 />
      <ChildComponent greetMe="Bonjour!" />
    </div>
  );
}

export default App;
