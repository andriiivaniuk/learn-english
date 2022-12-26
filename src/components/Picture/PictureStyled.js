import styled from "styled-components";

import { DESIGN_CONST } from "../../assets/themes/designConstants";

export const LoaderBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;

    border-radius: 15px;
    border: 3px solid ${DESIGN_CONST.button.borderColor};
`

export const Loader = styled.div`

    margin: auto;
    border: 20px solid #EAF0F6;
    border-radius: 50%;
    border-top: 20px solid ${DESIGN_CONST.button.borderColor};
    animation: spinner 4s linear infinite;

    width: 150px;
    height: 150px;

    overflow: hidden;

    @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export const PictureStyled = styled.img`
    display: block;

    width: 400px;
    height: 400px;
    object-fit: contain;

    overflow: hidden;
    border-radius: 15px;
    border: 3px solid ${DESIGN_CONST.button.borderColor};
`
