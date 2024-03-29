import { useState } from "react";

import { 
    useSelector,
    useDispatch 
} from "react-redux"

import { setUserLanguage } from "../../ducks/appInfo";

import {
    LangDropDownStyled,
    SelectedLang,
    OptionsList,
    LanguageOption
} from "./LangDropDownStyled";

import { LANGUAGES } from "../../config/configs";

function LangDropDown() {

    const currentLang = useSelector(state => state.appInfo.userLanguage);
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    const mode = useSelector(state => state.appInfo.mode);
    const dispatch = useDispatch();

    return (  
        mode !== "test"  &&
        <LangDropDownStyled onClick={() => {setIsOptionsShown(!isOptionsShown)}}>
            <SelectedLang>
                {currentLang}
                {isOptionsShown &&
                    <OptionsList>
                        {LANGUAGES.map((option) => 
                            <LanguageOption 
                                key = {option + "lang"}
                                onClick = {() => dispatch(setUserLanguage(option))}>
                                {option}
                            </LanguageOption>
                        )}
                    </OptionsList>}
            </SelectedLang>

        </LangDropDownStyled>
    );
}

export default LangDropDown;