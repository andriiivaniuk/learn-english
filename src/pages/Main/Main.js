import {useSelector} from "react-redux"

import { useState } from "react";

import { Navigate } from "react-router-dom";

import StartModal from "../../components/StartModal/StartModal";

import { 
    MainStyled,
    TestYourselfArea,
    TestYourselfTitle,
    TestYourselfColumn,
    TestYourselfDesc,
    TestYourselfBtn,
    LearnSomeWordsArea,
    LearnSomeWordsfTitle,
    LearnSomeWordsColumn,
    LearnSomeWordsDesc,
    LearnSomeWordsBtn
} from "./MainStyled";

import { MainTexts } from "./MainTexts";


export const Main = () => {

    const lang = useSelector(state => state.appInfo.userLanguage);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <MainStyled>
            <TestYourselfArea>
                <TestYourselfTitle>
                    {MainTexts.TestYourselfTitle[lang]}
                </TestYourselfTitle>
                <TestYourselfColumn>
                    <TestYourselfDesc>
                        {MainTexts.TestYourselfDesc[lang]}
                    </TestYourselfDesc>
                    <TestYourselfBtn onClick={() => setIsModalOpen(true)}>
                        {MainTexts.TestYourselfBtn[lang]}
                    </TestYourselfBtn>
                </TestYourselfColumn>
            </TestYourselfArea>
            <LearnSomeWordsArea>
                <LearnSomeWordsfTitle>
                    {MainTexts.LearnSomeWordsfTitle[lang]}
                </LearnSomeWordsfTitle>
                <LearnSomeWordsColumn>
                    <LearnSomeWordsDesc>
                        {MainTexts.LearnSomeWordsDesc[lang]}
                    </LearnSomeWordsDesc>
                    <LearnSomeWordsBtn onClick={() => setIsModalOpen(true)} >
                        {MainTexts.LearnSomeWordsBtn[lang]}
                    </LearnSomeWordsBtn>
                </LearnSomeWordsColumn>
            </LearnSomeWordsArea>
            {
                isModalOpen && <StartModal setModalVisibility = {setIsModalOpen} />
            }
        </MainStyled>
    )
}

export default Main;