import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/toPromise';
import { Quote } from "../models/quote";
import { AngularFireDatabase, AngularFireList, AngularFireAction } from "angularfire2/database";
import { UserCreatedQuote } from "../models/user-created-quote";
import { JsonConvert } from "json2typescript";

@Injectable()
export class QuotesService {
  //https://www.concretepage.com/angular-2/angular-2-http-post-example
  private quotesRef : AngularFireList<Quote>;

  private firebaseQuoteMap : Object;

  private jsonConverter: JsonConvert;

  constructor(private httpService: Http, private angularFireDatabase : AngularFireDatabase) {
    this.jsonConverter = new JsonConvert();
    this.quotesRef = this.angularFireDatabase.list('quotes');

    this.quotesRef.snapshotChanges().subscribe( (element) => {
      this.firebaseQuoteMap = new Object();
      element.map(temp => {
        let tempQuote : UserCreatedQuote = this.jsonConverter.deserialize(temp.payload.val(), UserCreatedQuote);
        this.firebaseQuoteMap[tempQuote.getKey()] = temp.payload.key;
      });
    });
  }

  createQuote(quote: UserCreatedQuote) {
    //this will create new entry
    //do it like this to be able to return a promise
    return this.quotesRef.push(quote).set(quote);
  }

  getQuoteList(quoteKey?: string){
    return this.angularFireDatabase.list('quotes', ref => quoteKey?
                 ref.orderByChild('key').equalTo(quoteKey) : ref).valueChanges();
  }

  findQuote(quoteKey?: string){
    // use take(1) so that it kills the subscription once first value is emitted
    return this.angularFireDatabase.list('quotes', ref => quoteKey?
                 ref.orderByChild('key').equalTo(quoteKey) : ref).valueChanges().take(1);
  }

  deleteQuote(quoteKey: string){
    let fireBaseKey = this.firebaseQuoteMap[quoteKey];
    return this.quotesRef.remove(fireBaseKey);
  }

  getQuoteOfTheDay() {
    let url: string = "https://talaikis.com/api/quotes/random/";
    //https://theysaidso.com/api/#random

    return this.httpService.get(url).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorObservable(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
  private handleErrorPromise(error: Response) {
    console.error(error);
    return Promise.reject(error);
  }
}