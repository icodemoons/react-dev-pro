
import React from "react";
import Square from "../square";

export default function Board({ squares, onClick, className }){
  return (<>
  <div className={`board ${className}`}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
  </>)
  }
``
