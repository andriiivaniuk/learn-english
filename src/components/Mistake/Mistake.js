import { useState } from "react";

import { useSelector } from "react-redux";

import {
    MistakeStyled,
    MistakeInfo,
    Definition,
    Translation,
    YouChose,
    MistakeArrow,
    MistakeArrowImg,
    MistakeTitleSet,
    MistakeWord
} from "./MistakeStyled";

import mistakeArrow from "./../../assets/images/mistakeArrow.png";

import { MistakeTexts } from "./MistakeTexts";

function Mistake({mistakeObj}) {
    const [isExpanded, setIsExpdanded] = useState(false);
    const lang = useSelector(state => state.appInfo.userLanguage);

    return <MistakeStyled onClick={() => setIsExpdanded(!isExpanded)}>
        <MistakeTitleSet>
            <MistakeWord>
                {mistakeObj.wordData.word} 
            </MistakeWord>
            <MistakeArrow>
                <MistakeArrowImg src = {mistakeArrow} isExpanded = {isExpanded}/>
            </MistakeArrow>
        </MistakeTitleSet>
       
        {
            isExpanded && 
            <MistakeInfo>
                <Definition>
                    {MistakeTexts.definition[lang]}: {mistakeObj.definition}
                </Definition>
                {(lang === "ua" || lang === "ru") && <Translation>
                    {MistakeTexts.translation[lang]}: {" "}
                    {
                        lang === "ua" ? mistakeObj.wordData.translationUkr : mistakeObj.wordData.translationRus
                    }
                </Translation>}
                <YouChose>
                    {MistakeTexts.youChose[lang]}: {mistakeObj.wrongAnswer}
                </YouChose>
            </MistakeInfo>
        }
    </MistakeStyled>
}

export default Mistake;