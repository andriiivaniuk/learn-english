import styled from "styled-components";

import {DESIGN_CONST} from "../../assets/themes/designConstants";

export const NotFoundStyled = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      font-size: 2rem;
      flex-direction: column;
`
export const ToMainButton = styled.button`
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: ${DESIGN_CONST.button.bgColor};
    border: 0.2rem solid ${DESIGN_CONST.button.borderColor};
    border-radius: 5px;
    cursor: pointer;
`