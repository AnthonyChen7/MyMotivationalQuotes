import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import {EffectsModule} from "@ngrx/effects";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StoreModule, compose, combineReducers, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { ManageQuotesModule } from './activities/manage-quotes/manage-quotes.module';
import { AppComponent } from './app.component';
import {reducers, metaReducers} from "./states/index";
import { QuotesService } from './components/services/quotes.service';
import { QuoteEffects } from './states/quote/quote.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers,{metaReducers}),
    EffectsModule.forRoot([QuoteEffects]),
    ManageQuotesModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
