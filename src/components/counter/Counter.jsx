import React from "react";
import { useState } from "react";
import "./Counter.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CircularButton from "../circularButton/CircularButton";

function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }

  return (
    <div className="counterWrapper">
      <CircularButton action={add}>
        <AddIcon fontSize="large" />
      </CircularButton>
      <span className="counterValue">{count}</span>
      <CircularButton action={sub}>
        <RemoveIcon fontSize="large" />
      </CircularButton>
    </div>
  );
}

export default Counter;
