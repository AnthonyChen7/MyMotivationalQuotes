import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/toPromise';
import { Quote } from "../models/quote";
import { AngularFireDatabase, AngularFireList, AngularFireAction } from "angularfire2/database";
import { UserCreatedQuote } from "../models/user-created-quote";

@Injectable()
export class QuotesService {
  //https://www.concretepage.com/angular-2/angular-2-http-post-example
  private quotesRef : AngularFireList<Quote>;
  constructor(private httpService: Http, private angularFireDatabase : AngularFireDatabase) {
    this.quotesRef = this.angularFireDatabase.list('quotes');
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