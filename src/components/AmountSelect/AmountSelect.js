import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { 
    setModalSelectedWords,
    clearModalSelectedWords
} from "../../ducks/appInfo";

import { 
    AmountSelectStyled,
    AmountSelectTitle,
    MainAmountWrapper,
    AmountArrow,
    ArrowImg,
    AmountValue,
    AmountArrowRight,
    MaxAmount
} from "./AmountSelectStyled";

import { words } from "../../words/words.ts";

import amountArrow from "../../assets/images/amountArrow.svg"

function AmountSelect({title}) {

    const [max, setMax] = useState(0);
    const [current, setCurrent] = useState(null);
    const dispatch = useDispatch();

    const selectedThemes = useSelector(state => state.appInfo.modalAllWordThemes);
    const selectedDiffLevels = useSelector(state => state.appInfo.modalDiffLevels);
    const selectedSpeechParts = useSelector(state => state.appInfo.modalSpeechParts);

    const selectedWords = useSelector(state => state.appInfo.modalSelectedWordsArr);

    useEffect(() => {
        if (selectedDiffLevels?.length === 0 ||
            selectedSpeechParts?.length === 0 ||
            selectedThemes?.length === 0) {

            setMax(0);
            setCurrent(0);

            if (selectedWords.length > 0) {
                dispatch(clearModalSelectedWords());
            }
        } else {
            countPossibleWords();
        }

    }, [selectedThemes, selectedDiffLevels, selectedSpeechParts])

    const handleChangeClick = (isIncrement) => {
        if (isIncrement && current < max) {
            setCurrent(current + 1);
        } 
        if (!isIncrement && current > 1) {
            setCurrent(current - 1);
        }
    }

    const countPossibleWords = () => {
        const finalWords = new Set();

        for(let i = 0 ; i < words.length; i++) {
            let themes, diff, speech = false;

            if (selectedDiffLevels?.includes(words[i].difficulty)) {
                diff = true;
            } else {
                continue;
            }

            if (selectedSpeechParts?.includes(words[i].speechPart)){
                speech = true;
            } else {
                continue;
            }

            selectedThemes?.forEach(theme => {
                if (words[i].themes.includes(theme)) {
                    themes = true;
                } 
            });

            if (themes && diff && speech) {
                finalWords.add(words[i]);
            }
        }
        
        setMax(finalWords.size);
        setCurrent(finalWords.size);

        dispatch(setModalSelectedWords(Array.from(finalWords)));
    }

    return (
        <AmountSelectStyled>
            <AmountSelectTitle>
                {title}
            </AmountSelectTitle>
            <MainAmountWrapper>
                <AmountArrow onClick={() => handleChangeClick(false)}>
                    <ArrowImg src = {amountArrow} />
                </AmountArrow>
                <AmountValue>
                    {current}
                </AmountValue>
                <AmountArrowRight onClick={() => handleChangeClick(true)}>
                    <ArrowImg src = {amountArrow} />
                </AmountArrowRight>
            </MainAmountWrapper>
            <MaxAmount>
                Max: {max}
            </MaxAmount>
        </AmountSelectStyled>
    );
}

export default AmountSelect;