import styled from "styled-components";

export const Button = styled.button`
background-color: black;
color: white;
min-width: 220px;
padding: 10px 18px ;
font-size: 16px;
border-radius: 5px;
border: none;
cursor: pointer;
border: 1px solid transparent;
transition: 0.4s background ease-in ;


&:hover{
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in ;
}
`;

export const Outline = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
    background: black;
    color: white;
    border: 1px solid transparent;
    
}
`;
