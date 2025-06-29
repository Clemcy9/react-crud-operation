import React from "react";
import Card from "./Card";

function Cardcontainer({ children }) {
  return (
    <div className="border border-black flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 gap-6 max-w-4xl">{children}</div>
    </div>
  );
}

export default Cardcontainer;
