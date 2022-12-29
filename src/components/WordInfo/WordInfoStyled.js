import styled from "styled-components";

import { DESIGN_CONST } from "../../assets/themes/designConstants";
import { MOBILE_FONT_SIZE } from "../../assets/themes/sizeConstants";

export const WordInfoStyled = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 1rem;
    font-size: ${MOBILE_FONT_SIZE};

`

export const PartOfSpeech = styled.span`
    display: block;
    margin-top: 1rem;
    font-weight: 600;
`