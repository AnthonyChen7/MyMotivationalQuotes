import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule, compose, combineReducers } from '@ngrx/store';

import { ManageQuotesModule } from './activities/manage-quotes/manage-quotes.module';
import { AppComponent } from './app.component';
import {metaReducer, reducers} from "./states/index";
import { storeLogger } from 'ngrx-store-logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ManageQuotesModule,
    // StoreModule.forRoot({metaReducer} )
    // StoreModule.forRoot(reducers,{})
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
