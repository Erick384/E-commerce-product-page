import React from "react";
import { useState } from "react";

export const Quantity = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="button-one">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="hsl(26, 100%, 55%)"
        className="bi bi-dash-lg"
        viewBox="0 0 16 16"
        onClick={decrementCount}
      >
        <path
          fill-rule="evenodd"
          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
          stroke="hsl(26, 100%, 55%)"
          stroke-width="2"
        />
      </svg>

      <h2>{count}</h2>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        className="bi bi-plus"
        viewBox="0 0 16 16"
        onClick={incrementCount}
      >
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          stroke="hsl(26, 100%, 55%)"
          stroke-width="2"
          fill="none"
        />
      </svg>
    </div>
  );
};
