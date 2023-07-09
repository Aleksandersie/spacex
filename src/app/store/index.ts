import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pageTextApi } from "./pageTextApi";

const rootReducer = combineReducers({
    [pageTextApi.reducerPath]: pageTextApi.reducer,

})

export const store = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pageTextApi.middleware)
    })

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];   