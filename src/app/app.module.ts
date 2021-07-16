import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AccueilComponent } from './Vue/accueil/accueil.component';
import { from } from 'rxjs';
import { FormEmployeComponent } from './Vue/form/form-employe/form-employe.component';

import { GestiongardienComponent } from './Vue/gestiongardien/gestiongardien.component';
import { ActionComponent } from './Vue/gestionreservation/boutons/action/action.component';
import { ROUTING } from './app-routing';
import { ClientComponent } from './Vue/client/client.component';
import { SalleComponent } from './Vue/salle/salle.component';
import { ClientaccueilComponent } from './Vue/clientaccueil/clientaccueil.component';
import { ManageComponent } from './Vue/gestionreservation/manage/manage.component';
import { GestionequipementComponent } from './Vue/gestionequipement/gestionequipement.component';
import { HomeComponent } from './Vue/gestionreservation/home/home.component';
import { RemisecleComponent } from './Vue/gestionreservation/remisecle/remisecle.component';
import { EquipementComponent } from './Vue/equipement/equipement.component';


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
