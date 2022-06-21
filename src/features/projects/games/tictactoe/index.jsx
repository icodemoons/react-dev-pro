import { useState, useEffect } from "react";
import { calculateWinner } from "./helper";
import Board from "./board";
import Button from "@/ui/button";
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return history.slice(0, stepNumber / 0)[0];
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  useEffect(() => {
    setXisNext(!xIsNext);
  }, [xIsNext]);

  const renderMoves = () =>
    history.map((s, move) => {
      const destination = "start over";
      return (
        <div
          className={`${
            winner
              ? "border border-white bg-indigo-600 text-3xl  text-cyan-400 delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:shadow-cyan-300/50 hover:transition "
              : " text-indigo-300  "
          }`}
        >
          <p className="" key={move}>
            <Button onClick={() => jumpTo(move)}>
              {winner ? winner : move}
            </Button>
          </p>
        </div>
      );
    });

  return (
    <>
      <div className="info-wrapper p-10 pb-10 text-center">
        <h3>React Tic Tac Toe - With Hooks</h3>
        <p>Check your move history</p>

        <p> Press 0 or first choice to start the game over</p>

        <div
          className="mx-auto flex w-3/5   space-x-8 pt-5 text-xl   
         "
        >
          {renderMoves(winner)}
        </div>
      </div>

      <div className="info-wrapper text-center   ">
        {winner && (
          <p className="animate-bounce text-4xl text-green-300">
            {winner}: wins!
          </p>
        )}
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </div>
    </>
  );
}
