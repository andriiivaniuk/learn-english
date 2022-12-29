import { useSelector } from "react-redux";

import { ResultsTexts } from "./ResultsTexts";

import { 
    ResultsStyled,
    ResultsTitle,
    ResultsSubtitle
} from "./ResultsStyled";

function Results() {

    const lang = useSelector(state => state.appInfo.userLanguage)
    const wrongAnswers = useSelector(state => state.appInfo.wrongAnswers);
    const rightAnswers = useSelector(state => state.appInfo.rightAnswers);
    const mistakesArr = useSelector(state => state.appInfo.mistakesArr);
    const modalSelectedWordsArr = useSelector(state => state.appInfo.modalSelectedWordsArr);

    return <ResultsStyled>
        <ResultsTitle>
            {ResultsTexts.title[lang]}
        </ResultsTitle>
        <ResultsSubtitle>
            {rightAnswers} {ResultsTexts.rightAnswers[lang]} {ResultsTexts.outOf[lang]} 
            {" "} {modalSelectedWordsArr.length}
        </ResultsSubtitle>
    </ResultsStyled>;
}

export default Results;