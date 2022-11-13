import styled from "styled-components";

export const LangDropDownStyled = styled.div`
    border: 1px solid black;
    padding: 3px;
    border-radius: 4px;
    cursor: pointer;
`
export const SelectedLang = styled.span`
    position: relative;
    text-transform: capitalize;
`

export const OptionsList = styled.ul`
    position: absolute;
    top: 2rem;
    left: -0.7rem;
    display: flex;
    flex-direction: column;
    background-color: rgba(1,1,1,0.8);
    border: 2px orange solid;
`

export const LanguageOption = styled.li`
    font-weight: 500;
    color: wheat;
    padding: 0.5rem;
`