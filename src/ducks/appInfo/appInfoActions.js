import axios from 'axios';

export const GET_CURRENT_WORD_INFO = "GET_CURRENT_WORD_INFO";
export const SET_USER_LANGUGAGE = "SET_USER_LANGUGAGE";
export const SELECT_MAIN_MODE = "SELECT_MAIN_MODE";
export const RESET_MAIN_MODE = "RESET_MAIN_MODE";
export const SET_MODAL_SETTING = "SET_MODAL_SETTING";
export const CLEAR_MODAL_SETTINGS = "CLEAR_MODAL_SETTINGS";
export const SET_MODAL_SELECTED_WORDS = "SET_MODAL_SELECTED_WORDS";
export const CLEAR_MODAL_SELECTED_WORDS = "CLEAR_MODAL_SELECTED_WORDS";
export const INCREMENT_RIGHT_ANSWERS = "INCREMENT_RIGHT_ANSWERS";
export const INCREMENT_WRONG_ANSWERS = "INCREMENT_WRONG_ANSWERS";

export const fetchWordInfo = (word) => {
    return dispatch => {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
                headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin' : '*',
                }
            })
            .then(result => {
                console.log(result);
                dispatch(getCurrentWordInfo(result.data));
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }
} 

export const getCurrentWordInfo = (data) => {
    return {
        type: GET_CURRENT_WORD_INFO,
        payload: data
    }
}

export const setUserLanguage = (lang) => {
    return {
        type: SET_USER_LANGUGAGE,
        payload: lang
    }
}

export const selectMainMode = (mode) => {
    return {
        type: SELECT_MAIN_MODE,
        payload: mode
    }
}

export const resetMainMode = () => {
    return {
        type: RESET_MAIN_MODE
    }
}

export const setModalSettings = ({setting, value}) => {
    return {
        type: SET_MODAL_SETTING,
        payload: {setting: setting, value: value}
    }
}

export const clearModalSettings = () => {
    return {
        type: CLEAR_MODAL_SETTINGS
    }
}

export const setModalSelectedWords = (wordsArr) => {
    return {
        type: SET_MODAL_SELECTED_WORDS,
        payload: wordsArr
    }
}

export const clearModalSelectedWords = () => {
    return {
        type: CLEAR_MODAL_SELECTED_WORDS
    }
}

export const incrementRightAnswers = () => {
    return {
        type: INCREMENT_RIGHT_ANSWERS
    }
}

export const incrementWrongAnswers = () => {
    return {
        type: INCREMENT_WRONG_ANSWERS
    }
}