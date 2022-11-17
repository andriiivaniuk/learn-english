import styled from "styled-components";

export const CheckListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1em;
`
export const CheckListTitle = styled.div`
    
`

export const CheckListList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`

export const CheckListItem = styled.li`
    display: flex;
    cursor: pointer;
    gap: 0.5rem;
`
export const CheckListBox = styled.div`
    height: 15px;
    width: 15px;
    border: 2px solid black;
    position: relative;
`
export const Check = styled.div`
    position: absolute;
    background-color: blue;
    height: 9px;
    width: 9px;
    top: 1px;
    left: 1px;
`
export const OptionName = styled.span`

`
