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
            results: null,
            userLanguage: "ua"
        }
    }
}

export const store = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(thunk, storageMiddleware))
)

export default store;