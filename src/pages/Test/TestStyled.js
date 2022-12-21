import styled from "styled-components";

import { DESIGN_CONST } from "../../assets/themes/designConstants";

export const TestStyled = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NextButton = styled.button`
    cursor: pointer;
    background-color: ${DESIGN_CONST.button.bgColor};
    border: 3px solid ${DESIGN_CONST.button.borderColor};
    border-radius: 15px;
    margin: 0 4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
`

export const OptionsArea = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`   

export const Option = styled.span`
    margin: 1rem;
    padding: 1rem;
    border-radius: 15px;
    min-width: 150px;
    border: 3px solid ${DESIGN_CONST.button.borderColor};
    
    background-color: ${props => 
        props.isHighlight ? 
        props.isRight ? "green" : "red" 
        :  DESIGN_CONST.button.bgColor};
    cursor: pointer;
    
    display: flex;
    justify-content: center;

    @media screen and (max-width: 500px) {
        justify-content: center;
    }

    &:hover {
        font-weight: ${props => 
        props.isHighlight ? "inherit" : "800"}
    }
`

export const WordNum = styled.span`
    display: flex;
    justify-content: center;
`