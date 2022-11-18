import styled from "styled-components";

export const AmountSelectStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    gap: 1rem;
`

export const AmountSelectTitle = styled.span`

`

export const MainAmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AmountArrow = styled.div`
    cursor: pointer;
    height: 25px;
    width: 25px;
`
export const AmountArrowRight = styled.div`
    cursor: pointer;
    height: 25px;
    width: 25px;
    transform: rotate(180deg);
`

export const ArrowImg = styled.img`
    display: block;
    object-fit: contain;
`

export const AmountValue = styled.span`
    font-size: 2em;
`