import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { from } from 'rxjs';
import { FormEmployeComponent } from './form/form-employe/form-employe.component';

import { GestiongardienComponent } from './gestiongardien/gestiongardien.component';
import { ActionComponent } from './gestionreservation/boutons/action/action.component';
import { ROUTING } from './app-routing';
import { ClientComponent } from './client/client.component';
import { SalleComponent } from './salle/salle.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormEmployeComponent,
    GestiongardienComponent,
    ActionComponent,
    ClientComponent,
    SalleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
