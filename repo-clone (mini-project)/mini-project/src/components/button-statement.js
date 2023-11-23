import React from "react";
import { useState } from "react";

function ButtonStatement() {
  const [count, setCount] = useState(20);
  
  if (count ) {
    return (
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        tambah umur
      </button>
    );
  } else if (count > 0) {
    return (
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        kurang umur
      </button>
    );
  } else if (count <= 16) {
    return <h1>umur anda belum mencukupi</h1>;
  }
}

export default ButtonStatement;
