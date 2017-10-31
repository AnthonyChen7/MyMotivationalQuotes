import * as temp from './temp.actions';
import { CustomAction } from '../custom-action';

export interface State{
    quoteOfTheDay : string
}

const initialState : State ={
    quoteOfTheDay : undefined
}

export function reducer(state = initialState, action: CustomAction) : State{
    switch(action.type){

        case temp.TempActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE : {
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