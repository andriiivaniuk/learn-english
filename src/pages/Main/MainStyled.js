import styled from "styled-components";

import { 
    MOBILE_WIDTH,
    MOBILE_FONT_SIZE,
    TABLET_FONT_SIZE,
    TABLET_WIDTH,
    DESKTOP_FONT_SIZE
} from "../../assets/themes/sizeConstants";

import { DESIGN_CONST } from "../../assets/themes/designConstants";

export const MainStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    font-family: 'Manrope';
    padding: 2rem;
    gap: 3rem;
    max-width: 1200px;


    @media (max-width: ${TABLET_WIDTH}px) {
        padding: 1rem;
        gap: 2rem;
    }
`
export const TestYourselfArea = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
    }
`

export const TestYourselfTitle = styled.span`
    flex-basis: 45%;
    font-size: ${DESKTOP_FONT_SIZE * 2.5}rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: ${MOBILE_FONT_SIZE}rem;
    }

`

export const TestYourselfColumn = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        align-items: center;
    }
`

export const TestYourselfDesc = styled.p`

`

export const TestYourselfBtn = styled.button`
    text-align: center;
    font-size: ${DESKTOP_FONT_SIZE * 1.5}rem;
    padding: 0.5rem;
    cursor: pointer;

    background-color: ${DESIGN_CONST.button.bgColor};
    border: 5px solid ${DESIGN_CONST.button.borderColor};
    border-radius: 1rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: ${MOBILE_FONT_SIZE / 1.5}rem;
    }
`

export const LearnSomeWordsArea = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
    }
`

export const LearnSomeWordsfTitle = styled.span`
    flex-basis: 45%;
    font-size: ${DESKTOP_FONT_SIZE * 2.5}rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: ${MOBILE_FONT_SIZE}rem;
    }
`

export const LearnSomeWordsColumn = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    
    @media (max-width: ${MOBILE_WIDTH}px) {
        align-items: center;
    }
`

export const LearnSomeWordsDesc = styled.p`

`

export const LearnSomeWordsBtn = styled.button`

    text-align: center;
    font-size: ${DESKTOP_FONT_SIZE * 1.5}rem;
    padding: 0.5rem;
    cursor: pointer;

    background-color: ${DESIGN_CONST.button.bgColor};
    border: 5px solid ${DESIGN_CONST.button.borderColor};
    border-radius: 1rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: ${MOBILE_FONT_SIZE / 1.5}rem;
    }
`
