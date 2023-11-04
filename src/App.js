import React from "react";
import ThemeContextProvider from "./ThemeContext";
import MyComponent from "./Component1";

function App() {
  return (
    <div>
      <ThemeContextProvider themeValue="light">
        <MyComponent />
      </ThemeContextProvider>
      <ThemeContextProvider themeValue="dark">
        <MyComponent />
      </ThemeContextProvider>
    </div>
  );
}

export default App; //a file can have multiple functional components this way we are telling this will be the default component
//from this file
//export function otherFunction
//for import
//import App, { otherFunction } from './myModule'; default are imported without {} non default must go inside {}
