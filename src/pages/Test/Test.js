import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchWordInfo } from "../../ducks/appInfo";

import WordInfo from "../../components/WordInfo/WordInfo";

import { 
    TestStyled,
    NextButton,
    Option,
    OoptionsArea,
    WordNum
} from "./TestStyled";

import { scrambleArr, getAnswers} from "../../utils/utils.ts";


function Test() {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.appInfo.userLanguage);
    const testWords = useSelector(state => state.appInfo.modalSelectedWordsArr);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWordData = useSelector(state => state.appInfo.currentWordData);
    const [currentAnswers, setCurrentAnswers] = useState([]);

    const [loading, setLoading] = useState(true);
    const [wordNum, setWordNum] = useState(1);

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
        dispatch(fetchWordInfo(testWords[currentIndex + 1].word));
        setCurrentIndex(currentIndex + 1);
        setWordNum(wordNum + 1);
    }

    return ( 
        <TestStyled>
            <WordNum>
                Word № {wordNum} out of {testWords.length}
            </WordNum>
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
            {!loading &&
                <OoptionsArea>
                    {currentAnswers.map(answer =>
                        <Option key={answer}>{answer}</Option>
                    )}
                </OoptionsArea>
            }
        </TestStyled> 
    );
}

export default Test;