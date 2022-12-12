import LangDropDown from "../LangDropDown/LangDropDown";

import { 
    HeaderStyled,
    HeaderContent ,
    LogoLink
} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderContent>
                <LogoLink href="/" >LearnSome</LogoLink>
                <LangDropDown />
            </HeaderContent>
            
        </HeaderStyled>
    )
}

export default Header;