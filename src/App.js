import React from "react";
import PropsAndState from "./props-and-state";

function App(params) {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is first component in react</p>
      <br />
      <p>
        <p>This section we'll use props and state </p>
        <PropsAndState message="this message is passed through props" />
      </p>
    </div>
  );
}

export default App; //a file can have multiple functional components this way we are telling this will be the default component
//from this file
//export function otherFunction
//for import
//import App, { otherFunction } from './myModule'; default are imported without {} non default must go inside {}
