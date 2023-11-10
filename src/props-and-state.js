import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterSlice";

//props are read only
function PropsAndState(props) {
  //getting counter slice from store and then getting the value paramter from it
  //basically useSelect is used to get the values from store
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value by 5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment 5
        </button>
      </div>
    </div>
  );
}

export default PropsAndState;
