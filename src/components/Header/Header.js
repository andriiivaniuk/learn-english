import LangDropDown from "../LangDropDown/LangDropDown";

import { 
    HeaderStyled,
    HeaderContent 
} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderContent>
                LearnSome
                <LangDropDown />
            </HeaderContent>
            
        </HeaderStyled>
    )
}

export default Header;