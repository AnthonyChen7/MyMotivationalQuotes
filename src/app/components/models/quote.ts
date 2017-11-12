import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Quote{
    @JsonProperty("quote",String)
    quote : string;

    @JsonProperty("author",String)
    author : string;

    constructor(quote? : string, author? : string){
        this.quote = quote;
        this.author = author;
    }
}