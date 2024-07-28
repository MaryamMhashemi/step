import { useState } from "react";

export default function Count({ step }) {
  const [counter, setCounter] = useState(0);

  const date = new Date("july 27 2024");
  date.setDate(date.getDate() + counter);

  function handlePlus() {
    setCounter((c) => c + step);
  }
  function handleMines() {
    setCounter((c) => c - step);
  }
  return (
    <>
      <div className="step">
        <button onClick={handleMines}>-</button>
        <p>count:{counter}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <span>
        {counter === 0
          ? "Today is"
          : counter > 0
          ? `${counter}days from today is`
          : `${Math.abs(counter)}days ago was`}
      </span>
      <p>{date.toDateString()}</p>
    </>
  );
}
