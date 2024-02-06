import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <TotalContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </TotalContainer>
  )
}

export default TotalScore

const TotalContainer = styled.div`
    max-width: 200px;
    /* background-color: red; */
    text-align: center;
     h1{
        font-size: 100px;
        font-weight: 500;
        line-height: 90px;
     }
     p{
        font-size: 24px;
        font-weight: 500;
     }
`;