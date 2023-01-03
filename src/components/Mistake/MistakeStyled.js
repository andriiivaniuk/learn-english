import styled from "styled-components";

import { DESIGN_CONST } from "../../assets/themes/designConstants";

export const MistakeStyled = styled.div`
    margin: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    border-radius: 7px;
    cursor: pointer;
    border: ${DESIGN_CONST.panel.borderColor} 3px solid;
`
export const MistakeTitleSet = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`
export const MistakeWord = styled.span`
    text-transform: capitalize;
`

export const MistakeInfo = styled.div`
    display: block;
`

export const Definition = styled.span`
    margin-top: 1rem;
    display: block;
`
export const Translation = styled.span`
    margin-top: 1rem;
    display: block;
    font-weight: 600;
`

export const YouChose = styled.span`
    margin-top: 1rem;
    display: block;
    font-weight: 400;
`


export const MistakeArrow = styled.div`
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14px;
    width: 14px;
    transform: translateY(1px);
`

export const MistakeArrowImg = styled.img`
    display: block;
    transform:
    rotate(${props => props.isExpanded ? "90deg" : "0deg"});
    transition: .3s;
`

