import { Component1 } from "./Components/FunctionalComponents";
import Component2 from "./Components/ClassComponents";
import logo from "./logo.svg";
import ChildComponent from "./Components/ChildComponent";
import Header from "./Components/AssignmentOne/Header/Header";
import MainComponent from "./Components/AssignmentOne/MainComponent/MainComponent";
import "./App.css";
import List from "./Components/AssignmentTwo/List/List";

function App() {
  return (
    <div className="App">
      {/* <MainComponent /> */}
      <List />
    </div>
  );
}

export default App;
