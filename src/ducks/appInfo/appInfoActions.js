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
export const GET_CURRENT_PICTURE_DATA = "GET_CURRENT_PICTURE_DATA";
export const CLEAR_CURRENT_PICTURE_DATA = "CLEAR_CURRENT_PICTURE_DATA";
export const SET_USET_STARTED_TEST = "SET_USET_STARTED_TEST";
export const SET_MODAL_CUSTOM_MAX_WORDS = "SET_MODAL_CUSTOM_MAX_WORDS";

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

export const getCurrentPictureData = (data) => {
    return {
        type: GET_CURRENT_PICTURE_DATA,
        payload: data
    }
}

export const searchImages = (word) => {
    return dispatch => {
        const API_KEY = '24236724-a89ab3fbc60694d0f9dea8e28';
        const options = {
            method: 'GET',
            url: `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${word}&page=${1}&per_page=10&key=${API_KEY}`,
        };
        axios.
            request(options)
            .then(result => {
                console.log(result);
                dispatch(getCurrentPictureData(result.data));
            })
            .catch(error => {
                alert(error.response.data.message);
            })

    }
}

export const clearCurrentPictureData = () => {
    return {
        type: CLEAR_CURRENT_PICTURE_DATA
    }
}

export const setUserStartedTest = () => {
    return {
        type: SET_USET_STARTED_TEST
    }
}

export const setModalCustomMaxWords = (max) => {
    return {
        type: SET_MODAL_CUSTOM_MAX_WORDS,
        payload: max
    }
}