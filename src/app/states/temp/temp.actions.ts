import { CustomAction } from "../custom-action";

export const TempActionTypes = {
    Temp: "Temp"
};

export class Temp implements CustomAction{
    type: string = TempActionTypes.Temp;
    payload: string;
    
    constructor(payload : string){
        this.payload = payload;
    }
}

export type TempActions = Temp;