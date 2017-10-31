import { CustomAction } from "../custom-action";

const TEMP = "[TEMP]";

export const TempActionTypes = {
    GET_QUOTE_OF_THE_DAY_COMPLETE: TEMP+"Get quote of the day complete"
};

export class GetQuoteOfTheDayComplete implements CustomAction{
    type: string = TempActionTypes.GET_QUOTE_OF_THE_DAY_COMPLETE;
    payload: string;
    
    constructor(payload : string){
        this.payload = payload;
    }
}

export type TempActions = GetQuoteOfTheDayComplete;