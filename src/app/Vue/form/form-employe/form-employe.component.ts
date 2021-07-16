import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { EmployeservService } from 'src/app/service/employeserv.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-employe',
  templateUrl: './form-employe.component.html',
  styleUrls: ['./form-employe.component.scss']
})
export class FormEmployeComponent implements OnInit {
 employe = new Employe(null, null);
 typ: string ;
 a = 0 ;
 yes = false;
 tab = [];
  constructor( private service: EmployeservService, private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.service.retrieveEmployes().toPromise().then(
      data => {
               console.log(data);
               for (const dat of data){
               this.tab.push( new Employe(dat.nom , dat.mot_de_passe)) ;
               console.log(this.tab);
               }
        }

      );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
         console.log(params);
         if (params.employe){
               this.typ = params.employe;

         }
         if (params.gardien){
          this.typ = params.gardien;
    }
      });
}


   onSubmit(){
     this.service.postemploye(this.employe);
     ;
   }




   gotoGardien(){
 const lien = ['gardien'];
 this.router.navigate(lien);
  }

  gotoEmploye(){

        if (this.checking(this.employe.nom, this.employe.mot_de_passe)){
    console.log(this.employe);
    const lien = ['homereservation'];
    this.router.navigate(lien);

}else{
   alert('Authentification échoué');
}
  }


checking(nom: string , mot_de_passe: string){
         let check = false;
         for (const value of this.tab){
         if (value.nom === nom && value.mot_de_passe === mot_de_passe){
          check = true;
          console.log();

        }
         return check;
      }
 }
}
