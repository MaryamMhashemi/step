export default function Step({ step, setStep }) {
  function handlePlus() {
    setStep((c) => c + 1);
  }
  function handleMines() {
    setStep((c) => c - 1);
  }
  return (
    <div className="step">
      <button onClick={handleMines}>-</button>
      <p>step:{step}</p>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
