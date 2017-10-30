import * as temp from './temp.actions';
import { CustomAction } from '../custom-action';

export interface State{
    temp : string
}

const initialState : State ={
    temp : undefined
}

export function reducer(state = initialState, action: CustomAction) : State{
    switch(action.type){

        case temp.TempActionTypes.Temp : {
            const quoteOfTheDay = action.payload;
            //TODO alter and fix and make it look better
            let newObject = Object.assign({}, state, {temp : quoteOfTheDay});
            return newObject;
        }

        default:
            return state;
    }
};

export const getQuoteOfTheDay = (state:State) => state.temp;