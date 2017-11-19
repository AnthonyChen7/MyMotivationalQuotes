import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Quote } from "../models/quote";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class QuotesService {
  //https://www.concretepage.com/angular-2/angular-2-http-post-example
  constructor(private httpService: Http, private angularFireDatabase : AngularFireDatabase) {

  }

  createQuote(quote: Quote) {

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
    console.error();
    return Promise.reject(error);
  }
}