export const storageMiddleware = (store) => (next) => (action) => {
    next(action);
}

export default storageMiddleware;