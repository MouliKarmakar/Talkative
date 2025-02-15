import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './Rootredux';

export const store = configureStore({
    reducer: rootReducer
})
