import { 
    GET_CURRENT_WORD_INFO,
    SET_USER_LANGUGAGE,
    RESET_MAIN_MODE,
    SELECT_MAIN_MODE
 } from "./appInfoActions";

const appInfoReducer = ( state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_WORD_INFO:
            return {
                ...state,
                currentWordData: action.payload
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
        default:
            return state;
    }
}

export default appInfoReducer;