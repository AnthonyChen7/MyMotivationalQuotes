import { CustomAction } from "../custom-action";
import { Quote } from "../../components/models/quote";
import { Alert } from "../../components/models/alert";

const QUOTE : string = "[QUOTE]";

export const QuoteActionTypes = {
    GET_QUOTE_OF_THE_DAY : QUOTE+"Get quote of the day",
    GET_QUOTE_OF_THE_DAY_COMPLETE: QUOTE+"Get quote of the day complete",
    CREATE_QUOTE: QUOTE+"Creating new quote",
    STATUS_MESSAGE: QUOTE+"Status Message"
};

export class GetQuoteOfTheDay implements CustomAction{
    type: string = QuoteActionTypes.GET_QUOTE_OF_THE_DAY;
    constructor(){}
}

export class GetQuoteOfTheDayComplete implements CustomAction{
    type: string = QuoteActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE;
    payload: Quote;
    
    constructor(payload : Quote){
        this.payload = payload;
    }
}

export class CreateQuote implements CustomAction{
    type :string = QuoteActionTypes.CREATE_QUOTE;
    payload : Quote;

    constructor(payload : Quote){
        this.payload = payload;
    }
}

export class StatusMessage implements CustomAction{
    type: string = QuoteActionTypes.STATUS_MESSAGE;
    payload : Alert;

    constructor(payload : Alert){
        this.payload = payload;
    }
}

export type QuoteActions = GetQuoteOfTheDay | GetQuoteOfTheDayComplete | CreateQuote;