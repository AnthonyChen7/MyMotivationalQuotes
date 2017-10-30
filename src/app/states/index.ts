import { createSelector } from 'reselect';
import {storeLogger} from "ngrx-store-logger";
import { environment } from '../../environments/environment';
import {compose} from "@ngrx/core"; 
import {combineReducers, createFeatureSelector, ActionReducer} from "@ngrx/store";

import * as quoteReducer from "./quote/quote.reducer"; 
import * as tempReducer from "./temp/temp.reducer"; 


export interface AppState{
    quote: quoteReducer.State,
    temp : tempReducer.State
}

export const reducers = {
    quote: quoteReducer.reducer,
    temp : tempReducer.reducer
}

const developmentReducer:Function = compose(storeLogger(), combineReducers)(reducers);

export function metaReducer(state: any, action: any) { 
    return developmentReducer(state, action); 
}

export const getQuoteState = (state: AppState) => state.quote;
export const getQuoteOfTheDay = createSelector(getQuoteState, (state : quoteReducer.State) => state.quoteOfTheDay);

export const getTempState = (state: AppState) => state.temp;
export const getQuoteOfTheDayTemp = createSelector(getTempState, (state : tempReducer.State) => state.temp);