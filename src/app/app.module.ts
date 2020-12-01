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
import { ClientaccueilComponent } from './clientaccueil/clientaccueil.component';
import { ManageComponent } from './gestionreservation/manage/manage.component';
import { GestionequipementComponent } from './gestionequipement/gestionequipement.component';
import { HomeComponent } from './gestionreservation/home/home.component';
import { RemisecleComponent } from './gestionreservation/remisecle/remisecle.component';
import { EquipementComponent } from './equipement/equipement.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormEmployeComponent,
    GestiongardienComponent,
    ActionComponent,
    ClientComponent,
    SalleComponent,
    ClientaccueilComponent,
    ManageComponent,
    GestionequipementComponent,
    HomeComponent,
    RemisecleComponent,
    EquipementComponent,
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
