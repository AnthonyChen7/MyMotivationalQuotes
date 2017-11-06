import * as quote from './quote.actions';
import { CustomAction } from '../custom-action';

export interface State{
    quoteOfTheDay : string
}

const initialState : State ={
    quoteOfTheDay : undefined
}

export function reducer(state = initialState, action: CustomAction) : State{
    switch(action.type){

        case quote.QuoteActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE : {
            const quoteOfTheDay = action.payload;
            //TODO alter and fix and make it look better
            let newObject = Object.assign({}, state, {quoteOfTheDay : quoteOfTheDay});
            return newObject;
        }

        default:
            return state;
    }
};

export const getQuoteOfTheDay = (state:State) => state.quoteOfTheDay;