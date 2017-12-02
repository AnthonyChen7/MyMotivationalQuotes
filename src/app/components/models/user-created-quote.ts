import {JsonObject, JsonProperty} from "json2typescript";
import { Quote } from "./quote";

@JsonObject
export class UserCreatedQuote extends Quote{

    @JsonProperty("quote",String)
    quote : string;

    @JsonProperty("author",String)
    author : string;

    @JsonProperty("key",String)
    private key : string;

    constructor(quote? : string, author? : string){
        super(quote, author);
        this.key = this.author+":"+this.quote;
    }

    getKey(){
        return this.author+":"+this.quote;
    }
}