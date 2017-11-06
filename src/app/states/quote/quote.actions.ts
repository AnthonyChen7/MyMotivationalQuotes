import { CustomAction } from "../custom-action";

const QUOTE : string = "[QUOTE]";

export const QuoteActionTypes = {
    GET_QUOTE_OF_THE_DAY : QUOTE+"Get quote of the day",
    GET_QUOTE_OF_THE_DAY_COMPLETE: QUOTE+"Get quote of the day complete"
};

export class GetQuoteOfTheDay implements CustomAction{
    type: string = QuoteActionTypes.GET_QUOTE_OF_THE_DAY;
    constructor(){}
}

export class GetQuoteOfTheDayComplete implements CustomAction{
    type: string = QuoteActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE;
    payload: string;
    
    constructor(payload : string){
        this.payload = payload;
    }
}

export type QuoteActions = GetQuoteOfTheDay | GetQuoteOfTheDayComplete;