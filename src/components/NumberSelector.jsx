import styled from "styled-components"

const NumberSelector = ({ setError, error, isSelectNumber,setIsSelectedNumber}) => {
    const arrayNum = [1,2,3,4,5,6];
    const setNum = (value) => {
        setIsSelectedNumber(value);
        setError("");
    }
  return (
    <NumberSelectorContainer>
        <p style={{color:"red",fontWeight:400}}>{error}</p>
        <div className="flex">
            { arrayNum.map((value , i) => 
            <Box isSelected = {value === isSelectNumber} key={i} onClick={()=> setNum(value)}> {value} </Box>
            )}
        </div>
        <p>Select Number</p>

    </NumberSelectorContainer>

  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    padding-top:70px;
    .flex {
        display: flex;
        gap: 24px;
        
    }
    p{
        font-size: 24px;
        font-weight: 700;
        padding-top:10px;
    }


`;

const Box = styled.div`
    width:72px ;
    height: 72px;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.isSelected ? "black":"white")} ;
    color: ${(props) => (!(props.isSelected) ? "black":"white")};
`;