import { createSelector } from 'reselect';
import {storeLogger} from "ngrx-store-logger";

import * as quoteReducer from "./quote/quote.reducer"; 
import {compose} from "@ngrx/core"; 
import {combineReducers} from "@ngrx/store";

export interface AppState{
    quote: quoteReducer.State
}

export const reducers = {
    quote: quoteReducer.reducer
}

const developmentReducer:Function = compose(storeLogger(), combineReducers)(reducers);

export function metaReducer(state: any, action: any) { 
    return developmentReducer(state, action); 
}  

export const getQuoteState = (state: AppState) => state.quote;
export const getQuoteOfTheDay = createSelector(getQuoteState, quoteReducer.getQuoteOfTheDay);