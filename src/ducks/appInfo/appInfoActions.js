import axios from 'axios';

export const GET_CURRENT_WORD_INFO = "GET_CURRENT_WORD_INFO";
export const SET_USER_LANGUGAGE = "SET_USER_LANGUGAGE";

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