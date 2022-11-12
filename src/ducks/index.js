import { combineReducers } from "redux";

import { appInfoReducer } from "./appInfo";

const reducers = combineReducers({
    appInfo: appInfoReducer
});

export default reducers;