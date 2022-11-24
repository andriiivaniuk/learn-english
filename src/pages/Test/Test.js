import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchWordInfo } from "../../ducks/appInfo";

import WordInfo from "../../components/WordInfo/WordInfo";

import { TestStyled, NextButton } from "./TestStyled";


function Test() {
    const dispatch = useDispatch();
    const testWords = useSelector(state => state.appInfo.modalSelectedWordsArr);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWordData = useSelector(state => state.appInfo.currentWordData);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (currentWordData) {
            setLoading(false)
        }
    }, [currentWordData]);

    useEffect(() => {
        dispatch(fetchWordInfo(testWords[currentIndex].word));
    }, []);

    const handleNextClick = () => {
        setLoading(true);
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
        </TestStyled> 
    );
}

export default Test;