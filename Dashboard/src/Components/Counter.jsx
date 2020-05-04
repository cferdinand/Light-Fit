import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import axios from "axios";

const Counter = ({ counter, getCount }) => {
  return (
    <div className="downloadCounter">
      <span className="header downloadHeader">Total Downloads: </span>
      <span className="counter counterNumber">{counter}</span>
      <span title="Click Here to Refresh" className="refreshIcon">
        <RefreshIcon fontSize="small" onClick={getCount} />
      </span>
    </div>
  );
};

export default Counter;
