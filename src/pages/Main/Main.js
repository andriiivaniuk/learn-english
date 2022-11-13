import {useSelector} from "react-redux"

import { Navigate } from "react-router-dom";

import { 
    MainStyled,
    TestYourselfArea,
    TestYourselfTitle,
    TestYourselfDesc,
    TestYourselfBtn,
    LearnSomeWordsArea,
    LearnSomeWordsfTitle,
    LearnSomeWordsDesc,
    LearnSomeWordsBtn
} from "./MainStyled";

import { MainTexts } from "./MainTexts";


export const Main = () => {

    const lang = useSelector(state => state.appInfo.userLanguage);

    return (
        <MainStyled>
            <TestYourselfArea>
                <TestYourselfTitle>
                    {MainTexts.TestYourselfTitle[lang]}
                </TestYourselfTitle>
                <TestYourselfDesc>
                    {MainTexts.TestYourselfDesc[lang]}
                </TestYourselfDesc>
                <TestYourselfBtn>
                    {MainTexts.TestYourselfBtn[lang]}
                </TestYourselfBtn>
            </TestYourselfArea>
            <LearnSomeWordsArea>

            </LearnSomeWordsArea>
        </MainStyled>
    )
}

export default Main;