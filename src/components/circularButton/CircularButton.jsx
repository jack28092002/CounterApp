import { IconButton } from "@mui/material";
import React from "react";
import "./CircularButton.css";

function CircularButton(props) {
  return (
    <IconButton className="circularButton" onClick={props.action}>
      {props.children}
    </IconButton>
  );
}

export default CircularButton;
