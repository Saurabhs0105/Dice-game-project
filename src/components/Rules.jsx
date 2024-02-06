import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h3>How to play dice game</h3>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    h3{
      margin-bottom: 10px;
    }
    border-radius: 10px;
    font-weight: 500;
    margin-top: 40px;
    height: 150px;
    max-width: 794px;
    padding: 20px;
    line-height: 27px;
    background-color: rgba(251, 241, 241, 1);
`;