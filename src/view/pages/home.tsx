// add counter to the page, use react-bootstrap, redux-toolkit, use our counter slice

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { type RootState } from "../../core/store/createStore";
import { increment, decrement } from "../../state/counterSlice";

export const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <p>
        <Button
          id="increment"
          variant="primary"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <span id="count"> {count} </span>
        <Button
          id="decreament"
          variant="primary"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </p>
    </div>
  );
};

export default Home;
