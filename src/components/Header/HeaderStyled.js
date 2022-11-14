import styled from "styled-components";

import {
    MOBILE_FONT_SIZE,
    MOBILE_WIDTH,
    TABLET_FONT_SIZE,
    DESKTOP_FONT_SIZE,
    MAX_SITE_CONTENT
 } from "../../assets/themes/sizeConstants";

export const HeaderStyled = styled.nav`
    width: 100%;
    font-family: 'Manrope';
    font-size: ${DESKTOP_FONT_SIZE}rem;

    background-color: azure;

    display: flex;
    justify-content: center;
`

export const HeaderContent = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem 2rem;
    max-width: ${MAX_SITE_CONTENT}px;
`