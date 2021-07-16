import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './Vue/accueil/accueil.component';
import { FormEmployeComponent } from './Vue/form/form-employe/form-employe.component';
import { ActionComponent } from './Vue/gestionreservation/boutons/action/action.component';
import { ClientComponent } from './Vue/client/client.component';
import { SalleComponent } from './Vue/salle/salle.component';
import { ClientaccueilComponent } from './Vue/clientaccueil/clientaccueil.component';
import { ManageComponent } from './Vue/gestionreservation/manage/manage.component';
import { HomeComponent } from './Vue/gestionreservation/home/home.component';
import { GestionequipementComponent } from './Vue/gestionequipement/gestionequipement.component';
import { GestiongardienComponent } from './Vue/gestiongardien/gestiongardien.component';
import { RemisecleComponent } from './Vue/gestionreservation/remisecle/remisecle.component';
import { EquipementComponent } from './Vue/equipement/equipement.component';






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
