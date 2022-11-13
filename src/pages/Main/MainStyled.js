import styled from "styled-components";

import { 
    MOBILE_WIDTH,
    MOBILE_FONT_SIZE,
    TABLET_FONT_SIZE,
    TABLET_WIDTH,
    DESKTOP_FONT_SIZE
} from "../../config/constants";

export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Manrope';
`
export const TestYourselfArea = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TestYourselfTitle = styled.span`
    font-size: ${DESKTOP_FONT_SIZE * 2}rem;

`

export const TestYourselfDesc = styled.p`
`

export const TestYourselfBtn = styled.button`
    font-size: ${DESKTOP_FONT_SIZE * 1.5}rem;
    padding: 0.5rem;
`

export const LearnSomeWordsArea = styled.section`
    display: flex;
`

export const LearnSomeWordsfTitle = styled.span`

`

export const LearnSomeWordsDesc = styled.p`

`

export const LearnSomeWordsBtn = styled.button`

`
