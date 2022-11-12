import { 
    GET_CURRENT_WORD_INFO
 } from "./appInfoActions";

const appInfoReducer = ( state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_WORD_INFO:
            return {
                ...state,
                currentWordData: action.payload
            }
        default:
            return state;
    }
}

export default appInfoReducer;