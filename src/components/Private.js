import React from "react";
import { useLocation } from "react-router-dom";

export const Private = (props) => {
  debugger;
  // console.log(props,"props");
  const location = useLocation();
  return (
    <div>
      <h2>Private Route with User Name : {location.state} </h2>
    </div>
  );
};
