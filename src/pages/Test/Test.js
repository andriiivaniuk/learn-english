import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchWordInfo } from "../../ducks/appInfo";

import WordInfo from "../../components/WordInfo/WordInfo";

import { TestStyled, NextButton } from "./TestStyled";

import { scrambleArr, getAnswers} from "../../utils/utils.ts";


function Test() {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.appInfo.userLanguage);
    const testWords = useSelector(state => state.appInfo.modalSelectedWordsArr);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWordData = useSelector(state => state.appInfo.currentWordData);
    const [currentAnswers, setCurrentAnswers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (currentWordData) {
            setLoading(false);
        }
        formAnswersArr();
    }, [currentWordData]);

    useEffect(() => {
        dispatch(fetchWordInfo(testWords[currentIndex].word));
        formAnswersArr();
    }, []);

    function formAnswersArr() {
        setCurrentAnswers(
            scrambleArr(
                [testWords[currentIndex].word,
                ...getAnswers(testWords[currentIndex].word)])
        );
    }

    const handleNextClick = () => {
        setLoading(true);
        //formAnswersArr();
        dispatch(fetchWordInfo(testWords[currentIndex + 1].word));
        setCurrentIndex(currentIndex + 1);
    }

    return ( 
        <TestStyled>
            {
                <WordInfo 
                    loading = {loading}
                    wordData = {currentWordData}
                    wordObj = {testWords[currentIndex]} 
                />
            }
            <NextButton onClick={handleNextClick}>
                Next
            </NextButton>
            {currentAnswers.map(answer => <p>{answer}</p>)}
        </TestStyled> 
    );
}

export default Test;