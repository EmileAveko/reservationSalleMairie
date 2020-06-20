import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { from } from 'rxjs';
import { FormEmployeComponent } from './form/form-employe/form-employe.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormEmployeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
