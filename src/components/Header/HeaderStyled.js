import styled from "styled-components";

import {
    MOBILE_FONT_SIZE,
    MOBILE_WIDTH,
    TABLET_FONT_SIZE,
    DESKTOP_FONT_SIZE
 } from "../../config/constants";

export const HeaderStyled = styled.nav`
    font-family: 'Manrope';
    font-size: ${DESKTOP_FONT_SIZE}rem;

    padding: 1rem;
    background-color: azure;

    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
`