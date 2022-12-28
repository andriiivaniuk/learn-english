import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {useNavigate} from "react-router-dom"

import {
    clearModalSettings,
    resetMainMode,
    setModalSelectedWords,
    setUserStartedTest
} from "../../ducks/appInfo";

import closeCross from "./../../assets/images/closeCross.svg"

import CheckList from "../CheckList/CheckList";

import AmountSelect from "../AmountSelect/AmountSelect";

import { 
    allWordThemes
} from "../../words/words.ts";

import { EspeechPart, EdifficultyLevel } from "../../words/Interfaces.ts";

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

import { 
    ModalBackground,
    ModalContainer,
    ModalContainerCloseBtnWrapper,
    CloseBtn,
    ModalContentWrapper,
    ModalTitle,
    ModalSettings,
    TitleDevider,
    StartButton
} from "./StartModalStyled";

import { StartModalTexts } from "./StartModalTexts";

const {diffLevels, speechParts} = getEnumVals();

function StartModal({setModalVisibility}) {

    const customMaxWords = useSelector(state => state.appInfo.modalCustomMax);
    const lang = useSelector(state => state.appInfo.userLanguage);
    const currentWords = useSelector(state => state.appInfo.modalSelectedWordsArr)
    const dispatch = useDispatch();
    const mode = useSelector(state => state.appInfo.mode);
    const [topOffset, setTopOffset] 
    = useState(Math.abs(document.querySelector("body").getBoundingClientRect().top));
    const navigate = useNavigate();

    const keyboardListener = (e) => {
        if (e.key === "Escape") {
            dispatch(resetMainMode());
            closeModal();
        }
    }

    function closeModal() {
        enableBodyScroll(document.querySelector("body"));
        document.removeEventListener("keydown", keyboardListener);
        window.removeEventListener("resize", resizeListener);
        setModalVisibility(false);
        dispatch(clearModalSettings());
    }

    useEffect(() => {
        disableBodyScroll(document.querySelector("body"));
        document.addEventListener("keydown", keyboardListener);
        window.addEventListener("resize", resizeListener);
    }, []);

    const resizeListener = () => {
        setTopOffset(Math.abs(document.querySelector("body").getBoundingClientRect().top));
    }

    function closeModalByClick(e) {
        if (e.target?.id === "modalBackground" || e.target?.id === "modalCloseBtn") {
            dispatch(resetMainMode());
            closeModal();
            e.stopPropagation();
        }
    }

    function handleStartClick () {
        if (currentWords.length === 0) {
            return;
        } else {
            dispatch(setUserStartedTest());

            if (customMaxWords !== null) {
                dispatch(setModalSelectedWords(
                    currentWords.slice(0, customMaxWords - 1)
                ));
            }

            closeModal();
            navigate(mode);
        }
    }

    return ( 
        <ModalBackground
            top={topOffset}
            onClick={closeModalByClick}
            id="modalBackground">
            <ModalContainer>
                <ModalContainerCloseBtnWrapper onClick={closeModalByClick} >
                    <CloseBtn src={closeCross} id = "modalCloseBtn">
                    </CloseBtn>
                </ModalContainerCloseBtnWrapper>
                <ModalContentWrapper>
                    <ModalTitle>
                        {StartModalTexts.ModalTitle[mode][lang]}
                    </ModalTitle>
                    <TitleDevider />
                    <ModalSettings>
                        <CheckList
                            title={StartModalTexts.SpeechPart[lang]}
                            options={speechParts}
                            storeSelector = {"modalSpeechParts"}
                            alreadySelected={true} />
                        <CheckList
                            title={StartModalTexts.Diffuculty[lang]}
                            options={diffLevels}
                            storeSelector = {"modalDiffLevels"} />
                        <CheckList
                            title={StartModalTexts.Themes[lang]}
                            options={allWordThemes}
                            storeSelector = {"modalAllWordThemes"}
                            alreadySelected={true}
                            />
                        <AmountSelect
                            title = {StartModalTexts.Amount[lang]}>
                        </AmountSelect>
                    </ModalSettings>
                    <StartButton onClick={handleStartClick} >
                        {StartModalTexts.StartButton[mode][lang]}
                    </StartButton>
                </ModalContentWrapper>

            </ModalContainer>

        </ModalBackground>
    );
}

export default StartModal;


function getEnumVals() {
    let difficulties = Object.keys(EdifficultyLevel);
    let speech = Object.keys(EspeechPart);

    return {diffLevels: difficulties, speechParts: speech};
}