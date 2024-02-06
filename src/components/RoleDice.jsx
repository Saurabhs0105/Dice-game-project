
import styled from "styled-components"


const RoleDice = ({currentDice,Roledice}) => {
   
  return (
    <DiceContainer >
    <div className="dice" onClick={Roledice}>
    <img src= {`/images/Dices/dice_${currentDice}.png`} alt="dice_1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    .dice{
        cursor: pointer;
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }
`;