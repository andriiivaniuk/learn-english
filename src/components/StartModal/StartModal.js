import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { clearModalSettings, resetMainMode } from "../../ducks/appInfo";

import closeCross from "./../../assets/images/closeCross.svg"

import CheckList from "../CheckList/CheckList";

import AmountSelect from "../AmountSelect/AmountSelect";

import { 
    EdifficultyLevel, 
    EspeechPart,
    allWordThemes
} from "../../words/words.ts";

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

import { 
    ModalBackground,
    ModalContainer,
    ModalContainerCloseBtnWrapper,
    CloseBtn,
    ModalContentWrapper,
    ModalTitle,
    ModalSettings,
    TitleDevider
} from "./StartModalStyled";

import { StartModalTexts } from "./StartModalTexts";

const {diffLevels, speechParts} = getEnumVals();

function StartModal({setModalVisibility}) {

    const lang = useSelector(state => state.appInfo.userLanguage);
    const dispatch = useDispatch();
    const mode = useSelector(state => state.appInfo.mode);
    const [topOffset, setTopOffset] 
    = useState(Math.abs(document.querySelector("body").getBoundingClientRect().top));

    const keyboardListener = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    function closeModal() {
        enableBodyScroll(document.querySelector("body"));
        document.removeEventListener("keydown", keyboardListener);
        window.removeEventListener("resize", resizeListener);
        setModalVisibility(false);
        dispatch(resetMainMode());
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
            closeModal();
            e.stopPropagation();
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