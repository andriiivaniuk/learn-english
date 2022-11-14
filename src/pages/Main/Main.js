import {useDispatch, useSelector} from "react-redux"

import { useState } from "react";

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

import { MAIN_MODES } from "../../config/mainModes";

import { selectMainMode } from "../../ducks/appInfo";


export const Main = () => {

    const dispatch = useDispatch();
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
                    <TestYourselfBtn onClick = {
                        () =>{
                            setIsModalOpen(true);
                            dispatch(selectMainMode(MAIN_MODES.test));
                        }}>
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
                    <LearnSomeWordsBtn onClick = {
                        () => { 
                            setIsModalOpen(true);
                            dispatch(selectMainMode(MAIN_MODES.learn));
                        }} >
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