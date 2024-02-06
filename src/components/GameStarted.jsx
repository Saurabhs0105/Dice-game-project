import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react";
import { Button, Outline } from "../styled.js/Button";
import Rules from "./Rules";


const GameStarted = () => {
  const [score,setScore] = useState(0);
  const [isSelectNumber,setIsSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules,setShowRules] = useState(false)
  
  const genrateRandomNum = (min,max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
   return (Math.floor(Math.random() * (max - min) + min));
 }

 const Roledice = () => {
    if(!isSelectNumber) {
      setError("You have not selected any number");
      return
    }
 
    const RdmGenerate = genrateRandomNum(1,7);
    setCurrentDice((prev)=>  RdmGenerate);

  if(isSelectNumber === currentDice){
    setScore((prev) => prev+currentDice)
  }
  else{
    setScore((prev) => prev-2)
  }
  setIsSelectedNumber(undefined);
 }

 const ResetScore = () => {
  setScore(0);
 }

  return (
    <MainContainer>
     <div className="top_section">
      <TotalScore score = {score}/>
    
      <NumberSelector setError = {setError} error= {error} isSelectNumber = {isSelectNumber} setIsSelectedNumber = {setIsSelectedNumber} />
     </div>
     <RoleDice currentDice = {currentDice} Roledice = {Roledice}/>
     <div className="btns">
      <Outline onClick={ResetScore}>Reset Score</Outline>
      <Button onClick={ ()=> setShowRules((prev) => !prev)}>Show Rules </Button>
      {showRules && <Rules/>}
     </div>
    </MainContainer>
  
  )
}


export default GameStarted

const MainContainer = styled.main`
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
   
  }
  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    
  }
`;