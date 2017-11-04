import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule, compose, combineReducers, ActionReducer, MetaReducer } from '@ngrx/store';

import { ManageQuotesModule } from './activities/manage-quotes/manage-quotes.module';
import { AppComponent } from './app.component';
import {metaReducer, reducers} from "./states/index";
import { storeLogger } from 'ngrx-store-logger';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    // console.log('state', state);
    // console.log('action', action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ManageQuotesModule,
    StoreModule.forRoot(reducers,{metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
