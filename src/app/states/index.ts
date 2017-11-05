import { createSelector } from 'reselect';

import * as quoteReducer from "./quote/quote.reducer"; 
import { CustomAction } from './custom-action';


export interface AppState{
    quote: quoteReducer.State
}

export const reducers = {
    quote: quoteReducer.reducer,
}

export const getQuoteState = (state: AppState) => state.quote;
export const getQuoteOfTheDay = createSelector(getQuoteState, (state : quoteReducer.State) => state.quoteOfTheDay);