import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { ManageQuotesModule } from './activities/manage-quotes/manage-quotes.module';
import { AppComponent } from './app.component';
import {metaReducer, reducers} from "./states/index";
// import {reducer as quoteReducer} from "./states/quote/quote.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ManageQuotesModule,
    // StoreModule.forRoot({metaReducer} )
    StoreModule.forRoot(reducers,{} )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
