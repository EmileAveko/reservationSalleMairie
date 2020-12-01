import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormEmployeComponent } from './form/form-employe/form-employe.component';
import { ActionComponent } from './gestionreservation/boutons/action/action.component';
import { ClientComponent } from './client/client.component';
import { SalleComponent } from './salle/salle.component';
import { ClientaccueilComponent } from './clientaccueil/clientaccueil.component';
import { ManageComponent } from './gestionreservation/manage/manage.component';
import { HomeComponent } from './gestionreservation/home/home.component';
import { GestionequipementComponent } from './gestionequipement/gestionequipement.component';
import { GestiongardienComponent } from './gestiongardien/gestiongardien.component';
import { RemisecleComponent } from './gestionreservation/remisecle/remisecle.component';
import { EquipementComponent } from './equipement/equipement.component';






const APP_ROUTING: Routes = [
{
   path: 'accueil', redirectTo: '/', pathMatch: 'full'

},
{
    path: '', component :  AccueilComponent

},
{
    path: 'login', component : FormEmployeComponent

},
{
    path: 'actionmail', component : ActionComponent

},
{
    path: 'salle', component : SalleComponent

},
{
    path: 'managesalle', component : ManageComponent

},
{
    path: 'client', component : ClientComponent

},
{
    path: 'homereservation', component : HomeComponent

},
{
    path: 'clientacceuil', component : ClientaccueilComponent

},
{
    path: 'equipement', component : GestionequipementComponent

},
{
    path: 'gardien', component : GestiongardienComponent

},
{
    path: 'login', component : FormEmployeComponent

},
{
    path: 'remisecle', component : RemisecleComponent

},

{
    path: 'listeEquipement', component : EquipementComponent

}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
