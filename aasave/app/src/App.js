import React from 'react';// import logo from './logo.svg';
import "./App.css";
import { SideComponent} from "./Component";
// import Example from "./Example";
// import { stateData, strData } from './data';
// import { HashLink } from 'react-router-hash-link';

function App() {
  return (
    <div className="App">
      <div id="side">
        <SideComponent />
      </div>
      <div id="boardCont">
        <div id="boardHead"></div>
        <div id="boardBody"></div>
        <div id="boardFoot"></div>
      </div>
    </div>
  );
}

export default App;