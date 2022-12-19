import styled from "styled-components";

import { DESIGN_CONST } from "../../assets/themes/designConstants";

export const TestStyled = styled.div`
    width: 100%;
    display: block;
    max-width: 1200px;
`

export const NextButton = styled.button`
    cursor: pointer;
    background-color: ${DESIGN_CONST.button.bgColor};
    height: 3rem;
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const OptionsArea = styled.div`
    display: flex;
    justify-content: space-between;
`   

export const Option = styled.span`
    padding: 1rem;
    border-radius: 15px;
    border: 3px solid ${DESIGN_CONST.button.borderColor};
    background-color: ${props => 
        props.isHighlight ? 
        props.isRight ? "green" : "red" 
        :  DESIGN_CONST.button.bgColor};
    cursor: pointer;
`

export const WordNum = styled.span`
    display: flex;
    justify-content: center;
`