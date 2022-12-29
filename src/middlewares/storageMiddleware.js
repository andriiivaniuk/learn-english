import { SET_USER_LANGUGAGE } from "../ducks/appInfo/appInfoActions";

export const storageMiddleware = (store) => (next) => (action) => {

    switch (action.type) {
        case SET_USER_LANGUGAGE:
            localStorage.setItem("lang", action.payload);
            break;
    }

    next(action);
}

export default storageMiddleware;