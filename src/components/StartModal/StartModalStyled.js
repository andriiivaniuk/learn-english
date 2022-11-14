import styled from "styled-components";

import { DESIGN_CONST } from "../../assets/themes/designConstants";

import { 
    DESKTOP_FONT_SIZE,
    TABLET_FONT_SIZE,
    MOBILE_FONT_SIZE
} from "../../assets/themes/sizeConstants";

export const ModalBackground = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`
export const ModalContainer = styled.div`
    min-height: 573px;
    min-width: 672px;

    margin-left: 20px;
    margin-right: 20px;

    background-color: white;
    border-radius: 6px;
    position: relative;
    color: black;

    @media (max-width: 610px) {
        
    }
`
export const ModalContainerCloseBtnWrapper = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    height: 14px;
    width: 14px;
    cursor: pointer;
    z-index: 2;
`
export const CloseBtn = styled.img`
    display: block;
    height: 100%;
    width: 100%;
`

export const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`

export const ModalTitle = styled.span`
    font-size: ${DESKTOP_FONT_SIZE * 2};
`