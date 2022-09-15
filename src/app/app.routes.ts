import {Route} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AppComponent} from "./app.component";


export const routes: Route[] = [
    {path: '', component: AppComponent},
    {path: 'home', component: HomeComponent},

]