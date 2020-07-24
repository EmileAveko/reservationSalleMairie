import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormEmployeComponent } from './form/form-employe/form-employe.component';
import { ActionComponent } from './gestionreservation/boutons/action/action.component';
import { ClientComponent } from './client/client.component';
import { SalleComponent } from './salle/salle.component';






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
    path: 'client', component : ClientComponent

}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
