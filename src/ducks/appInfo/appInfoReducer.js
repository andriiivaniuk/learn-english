import { 
    GET_CURRENT_WORD_INFO,
    SET_USER_LANGUGAGE,
    RESET_MAIN_MODE,
    SELECT_MAIN_MODE,
    SET_MODAL_SETTING,
    CLEAR_MODAL_SETTINGS,
    CLEAR_MODAL_SELECTED_WORDS,
    SET_MODAL_SELECTED_WORDS
 } from "./appInfoActions";

const appInfoReducer = ( state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_WORD_INFO:
            return {
                ...state,
                currentWordData: action.payload[0]
            }

        case SET_USER_LANGUGAGE:
            return {
                ...state,
                userLanguage: action.payload
            }
        case SELECT_MAIN_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case RESET_MAIN_MODE:
            return {
                ...state,
                mode: null
            }
        case SET_MODAL_SETTING: {
            const setting = action.payload.setting;
            const value = action.payload.value;

            return {
                ...state,
                [setting]: [...value]
            }
        }
        case CLEAR_MODAL_SETTINGS: {
            return {
                ...state,
                modalSpeechParts: [],
                modalDiffLevels: [],
                modalAllWordThemes: []
            }
        }
        
        case SET_MODAL_SELECTED_WORDS:
            return {
                ...state,
                modalSelectedWordsArr: action.payload
            }
        case CLEAR_MODAL_SELECTED_WORDS:
            return {
                ...state,
                modalSelectedWordsArr: []
            }

        default:
            return state;
    }
}

export default appInfoReducer;