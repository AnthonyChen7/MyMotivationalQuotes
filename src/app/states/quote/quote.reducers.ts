import * as quote from './quote.actions';
import { CustomAction } from '../custom-action';
import { Quote } from '../../components/models/quote';
import { validateConfig } from '@angular/router/src/config';

export interface State{
    quoteOfTheDay : Quote,
    quotes : Quote[]
}

const initialState : State = {
    quoteOfTheDay : undefined,
    quotes : []
}

export function reducer(state = initialState, action: CustomAction) : State{
    switch(action.type){

        case quote.QuoteActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE : {
            const quoteOfTheDay = action.payload;
            let newObject = Object.assign({}, state, {quoteOfTheDay : quoteOfTheDay});
            return newObject;
        }

        case quote.QuoteActionTypes.GET_QUOTE_LIST_COMPLETE : {
            const quotes = action.payload;
            let newObject = Object.assign({}, state, {quotes : quotes});
            return newObject;
        }

        default:
            return state;
    }
};

export const getQuoteOfTheDay = (state:State) => state.quoteOfTheDay;
export const getQuotes = (state:State) => state.quotes;