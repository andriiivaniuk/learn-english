import { 
    GET_CURRENT_WORD_INFO,
    SET_USER_LANGUGAGE
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

        default:
            return state;
    }
}

export default appInfoReducer;