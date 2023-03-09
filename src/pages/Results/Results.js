import { useEffect } from "react";

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
    MistakesList
} from "./ResultsStyled";

function Results() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lang = useSelector(state => state.appInfo.userLanguage)
    const wrongAnswers = useSelector(state => state.appInfo.wrongAnswers);
    const rightAnswers = useSelector(state => state.appInfo.rightAnswers);
    const mistakesArr = useSelector(state => state.appInfo.mistakesArr);
    const modalSelectedWordsArr = useSelector(state => state.appInfo.modalSelectedWordsArr);

    const ifUserStartedTest = useSelector(state => state.appInfo.ifUserStartedTest);

    useEffect(() => {
        dispatch(clearCurrentWordData());
        if (!ifUserStartedTest) {navigate("/"); return}
    }, [])

    return <ResultsStyled>
        <ResultsTitle>
            {ResultsTexts.title[lang]}
        </ResultsTitle>
        <AmountRunner max = {(rightAnswers / modalSelectedWordsArr.length) * 100}
         time = {2000}>
            %
        </AmountRunner>
        <ResultsSubtitle> 
            {rightAnswers} {ResultsTexts.rightAnswers[lang]} {ResultsTexts.outOf[lang]} 
            {" "} {modalSelectedWordsArr.length}
        </ResultsSubtitle>
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