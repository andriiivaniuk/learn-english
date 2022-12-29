import {legacy_createStore, applyMiddleware} from "redux";

import {composeWithDevTools} from "redux-devtools-extension"

import thunk from "redux-thunk"

import reducers from "./ducks";

import storageMiddleware from "./middlewares/storageMiddleware";


const getInitialStore = () => {
    return {
        appInfo: {
            mode: null,
            currentWord: null,
            currentWordData: null,
            currentPictureData: null,
            results: null,
            userLanguage: checkStorageForLang(),
            modalSpeechParts: [],
            modalDiffLevels: [],
            modalAllWordThemes: [],
            modalSelectedWordsArr: [],
            modalCustomMax: null,
            rightAnswers: 0,
            wrongAnswers: 0,
            mistakesArr: [],
            ifUserStartedTest: false
        }
    }
}

export const store = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(thunk, storageMiddleware))
)

export default store;

function checkStorageForLang() {
    if (localStorage.getItem("lang") !== null) {
        return localStorage.getItem("lang");
    } else {
        return "ua";
    }
}