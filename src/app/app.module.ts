import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';

import {HttpClientModule} from '@angular/common/http'
import {HeaderComponent} from './components/header/header.component';
import {CurrencyExchangeComponent} from './components/currency-exchange/currency-exchange.component';
import {CurrencyExchangeService} from './services/currency-exchange.service';
import {MatButtonModule} from "@angular/material/button";
import { CountryComponent } from './components/country/country.component';
import {ContriesComponent} from "./components/contries/contries.component";
import {MatTableModule} from "@angular/material/table";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        CurrencyExchangeComponent,
        CountryComponent,
        ContriesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatStepperModule,
        MatButtonModule,
        MatTableModule,
        MatTableExporterModule,
        MatPaginatorModule,
        MatToolbarModule,
    ],
    providers: [CurrencyExchangeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
