import React from "react";

function Random(props) {
  return (
    <button
      onClick={() => {
        props.randomSearch();
      }}
    >
      Random
    </button>
  );
}

export default Random;
