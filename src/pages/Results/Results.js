import {useEffect, useState} from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { ResultsTexts } from "./ResultsTexts";

import Mistake from "../../components/Mistake/Mistake";

import AmountRunner from "../../components/AmountRunner/AmountRunner";

import { clearCurrentWordData } from "../../ducks/appInfo";

import {
    ResultsStyled,
    ResultsTitle,
    ResultsSubtitle,
    MistakesArea,
    MistakesAreaTitle,
    MistakesList, ComplimentPhrase
} from "./ResultsStyled";

function Results() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lang = useSelector(state => state.appInfo.userLanguage)
    const wrongAnswers = useSelector(state => state.appInfo.wrongAnswers);
    const rightAnswers = useSelector(state => state.appInfo.rightAnswers);
    const mistakesArr = useSelector(state => state.appInfo.mistakesArr);
    const modalSelectedWordsArr = useSelector(state => state.appInfo.modalSelectedWordsArr);
    const [isRunnerDone, setRunnerDone] = useState(false);
    const [compliment, setCompliment] = useState("");

    const result = (rightAnswers / modalSelectedWordsArr.length) * 100;


    const ifUserStartedTest = useSelector(state => state.appInfo.ifUserStartedTest);

    useEffect(() => {
        dispatch(clearCurrentWordData());
        if (!ifUserStartedTest) {navigate("/"); return}

        if (result <= 35) {
            setCompliment(ResultsTexts.compliment.low[lang]);
        }
        if (result > 35 && result <= 75) {
            setCompliment(ResultsTexts.compliment.medium[lang]);
        }
        if (result > 75 && result <= 99) {
            setCompliment(ResultsTexts.compliment.good[lang]);
        }
        if (result === 100) {
            setCompliment(ResultsTexts.compliment.perfect[lang]);
        }
    }, [])

    return <ResultsStyled>
        <ResultsTitle>
            {ResultsTexts.title[lang]}
        </ResultsTitle>
        <AmountRunner max = {result}
         time = {1500} resolver = {setRunnerDone}>
            %
        </AmountRunner>
        <ResultsSubtitle> 
            {rightAnswers} {ResultsTexts.rightAnswers[lang]} {ResultsTexts.outOf[lang]} 
            {" "} {modalSelectedWordsArr.length}
        </ResultsSubtitle>
        {isRunnerDone && <ComplimentPhrase>
            {compliment}
        </ComplimentPhrase> }
        {mistakesArr.length > 0 && <MistakesArea>
            <MistakesAreaTitle>
                {ResultsTexts.yourMistakes[lang]}:
            </MistakesAreaTitle>
            <MistakesList>
                {mistakesArr.map(mistake =>
                    <Mistake key={mistake.wordNum} mistakeObj={mistake} />)
                }
            </MistakesList>
        </MistakesArea>}
    </ResultsStyled>;
}

export default Results;