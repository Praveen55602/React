import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import home from "./Home";
import PropsAndState from "./props-and-state";
import QueryParams, { RouteParams } from "./Routing";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PropsAndState />} />
          <Route path="/about" element={<PropsAndState />} />
          <Route path="/routing" element={<QueryParams />} />
          <Route path="/routing/:username/:rollno" element={<RouteParams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; //a file can have multiple functional components this way we are telling this will be the default component
//from this file
//export function otherFunction
//for import
//import App, { otherFunction } from './myModule'; default are imported without {} non default must go inside {}
