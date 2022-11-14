import LangDropDown from "../LangDropDown/LangDropDown";

import { 
    HeaderStyled,
    HeaderContent 
} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderContent>
                header 
                <LangDropDown />
            </HeaderContent>
            
        </HeaderStyled>
    )
}

export default Header;