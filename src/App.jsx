import { useState } from "react";
import "./App.css";
import Count from "./components/count";
import Step from "./components/step";

function App() {
  const [step, setStep] = useState(0);
  return (
    <>
      <Step step={step} setStep={(s) => setStep(s)} />
      <Count step={step} />
    </>
  );
}

export default App;
