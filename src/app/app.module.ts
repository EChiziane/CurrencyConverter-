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
import {MatButtonModule} from "@angular/material/button";
import {CountryComponent} from "./components/countries/country.component";
import {MatTableModule} from "@angular/material/table";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        CountryComponent
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
    bootstrap: [AppComponent]
})
export class AppModule {
}
