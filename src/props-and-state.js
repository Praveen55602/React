import React, { useState } from "react";

//props are read only
function PropsAndState(props) {
  // Use state to manage a variable that can change over time
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Props and State</h2>
      <p>Message from props: {props.message}</p>
      <p>Count from state: {count}</p>
      <button onClick={() => setCount(count + 1)}> Increment Count </button>
    </div>
  );
}

export default PropsAndState;
