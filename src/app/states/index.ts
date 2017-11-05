import { ActionReducer, MetaReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import { storeLogger } from 'ngrx-store-logger';
import * as quoteReducer from "./quote/quote.reducer"; 
import { CustomAction } from './custom-action';

export interface AppState{
    quote: quoteReducer.State
}

export const reducers = {
    quote: quoteReducer.reducer,
}

// Log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return storeLogger({collapsed: true, duration: false, timestamp: false})(reducer);
  }
  
export const metaReducers: MetaReducer<any>[] = [debug];

export const getQuoteState = (state: AppState) => state.quote;
export const getQuoteOfTheDay = createSelector(getQuoteState, (state : quoteReducer.State) => state.quoteOfTheDay);