import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { 
    fetchWordInfo,
    incrementRightAnswers,
    incrementWrongAnswers,
    clearCurrentPictureData
} from "../../ducks/appInfo";

import WordInfo from "../../components/WordInfo/WordInfo";

import { 
    TestStyled,
    NextButton,
    Option,
    OptionsArea,
    WordNum
} from "./TestStyled";

import { scrambleArr, getAnswers} from "../../utils/utils.ts";

import Picture from "../../components/Picture/Picture";


function Test() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ifUserStartedTest = useSelector(state => state.appInfo.ifUserStartedTest);

    const lang = useSelector(state => state.appInfo.userLanguage);
    const testWords = useSelector(state => state.appInfo.modalSelectedWordsArr);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWordData = useSelector(state => state.appInfo.currentWordData);
    const [currentAnswers, setCurrentAnswers] = useState([]);

    const [isHighlight, setIsHighlight] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);

    const [loading, setLoading] = useState(true);
    const [wordNum, setWordNum] = useState(1);

    useEffect(() => {
        if (currentWordData) {
            setLoading(false);
        }
        formAnswersArr();
    }, [currentWordData]);

    useEffect(() => {
        if (!ifUserStartedTest) {navigate("/"); return}
        dispatch(fetchWordInfo(testWords[currentIndex].word));
        formAnswersArr();
    }, []);

    function formAnswersArr() {
        if (!ifUserStartedTest) {navigate("/"); return}
        setCurrentAnswers(
            scrambleArr(
                [testWords[currentIndex].word,
                ...getAnswers(testWords[currentIndex].word, testWords[currentIndex].speechPart)])
        );
    }

    const handleNextClick = () => {
        setLoading(true);
        dispatch(fetchWordInfo(testWords[currentIndex + 1].word));
        dispatch(clearCurrentPictureData());
        setCurrentIndex(currentIndex + 1);
        setWordNum(wordNum + 1);

        setIsAnswered(false);
        setIsHighlight(false);
    }

    const handleResultsClick = () => {
        dispatch(clearCurrentPictureData());
        navigate("/results");
    }

    const checkAnswer = (answer) => {
        if (!isAnswered) {
            if (currentWordData.word === answer) {
                dispatch(incrementRightAnswers());
            } else {
                dispatch(incrementWrongAnswers());
            }
    
            setIsAnswered(true);
            setIsHighlight(true);
        }
    }

    return ( 
        <TestStyled>
            <WordNum>
                Word {wordNum} out of {testWords.length}
            </WordNum>
            {
                <WordInfo 
                    loading = {loading}
                    wordData = {currentWordData}
                    wordObj = {testWords[currentIndex]} 
                />
            }
            {
                !loading && <Picture word = {currentWordData.word} />
            }
            {!loading &&
                <OptionsArea>
                    {currentAnswers.map(answer =>
                        <Option
                            key={answer}
                            onClick={() => checkAnswer(answer)}
                            isRight={currentWordData.word === answer}
                            isHighlight={isHighlight}
                        >
                            {answer}
                        </Option>
                    )}
                </OptionsArea>
            }
            {
                (isAnswered && (currentIndex < testWords.length - 1)) &&
                <NextButton onClick={handleNextClick}>
                    Next
                </NextButton>
            }
            {
                (isAnswered && (currentIndex === testWords.length - 1)) &&
                <NextButton onClick={handleResultsClick}>
                    View results
                </NextButton>
            }
        </TestStyled> 
    );
}

export default Test;