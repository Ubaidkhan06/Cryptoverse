import { configureStore } from "@reduxjs/toolkit";

import { cryptoAPi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoAPi.reducerPath]: cryptoAPi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoAPi.middleware, cryptoNewsApi.middleware)
        
})
