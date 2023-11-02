import React, { useState } from "react";
import LifeCycleDemo from "./ComponentLifeCycle";

function App() {
  const [mounted, setMounted] = useState(false);

  return (
    <div>
      <button onClick={() => setMounted(true)} disabled={mounted}>
        Mount LifeCycleDemo component
      </button>
      <button onClick={() => setMounted(false)} disabled={!mounted}>
        UnMount LifeCycleDemo component
      </button>
      {mounted ? <LifeCycleDemo /> : null}
    </div>
  );
}

export default App; //a file can have multiple functional components this way we are telling this will be the default component
//from this file
//export function otherFunction
//for import
//import App, { otherFunction } from './myModule'; default are imported without {} non default must go inside {}
