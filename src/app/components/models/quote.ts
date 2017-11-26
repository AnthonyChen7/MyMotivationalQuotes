import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Quote{

    private key: string;

    @JsonProperty("quote",String)
    quote : string;

    @JsonProperty("author",String)
    author : string;

    constructor(quote? : string, author? : string, key?: string){
        this.quote = quote;
        this.author = author;
        this.key = key;
    }

    get keyString(){
        return this.key;
    }
}