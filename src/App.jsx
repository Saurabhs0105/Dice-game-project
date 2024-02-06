import StartGame from "./components/StartGame";
import { useState } from "react";
import './App.css';
import GameStarted from "./components/GameStarted";

function App() {
  
  const [isGameStarted, setIsGameStarted] = useState(false);
  const isStarted = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
    {isGameStarted ? <GameStarted /> : <StartGame isToogle = {isStarted} /> }
    </>
  )
}

export default App

