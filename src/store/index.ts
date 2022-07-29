import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { breakingBadAPI } from '../services/BreakingBadService';

const rootReducer = combineReducers({
  [breakingBadAPI.reducerPath]: breakingBadAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(breakingBadAPI.middleware),
});
