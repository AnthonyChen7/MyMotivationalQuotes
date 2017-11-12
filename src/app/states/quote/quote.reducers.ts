import * as quote from './quote.actions';
import { CustomAction } from '../custom-action';
import { Quote } from '../../components/models/quote';

export interface State{
    quoteOfTheDay : Quote
}

const initialState : State ={
    quoteOfTheDay : undefined
}

export function reducer(state = initialState, action: CustomAction) : State{
    switch(action.type){

        case quote.QuoteActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE : {
            const quoteOfTheDay = action.payload;
            let newObject = Object.assign({}, state, {quoteOfTheDay : quoteOfTheDay});
            return newObject;
        }

        default:
            return state;
    }
};

export const getQuoteOfTheDay = (state:State) => state.quoteOfTheDay;