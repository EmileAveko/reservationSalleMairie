import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { EmployeservService } from 'src/app/service/employeserv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-employe',
  templateUrl: './form-employe.component.html',
  styleUrls: ['./form-employe.component.scss']
})
export class FormEmployeComponent implements OnInit {
 employe = new Employe(null, null);
  constructor( private service: EmployeservService, private router: Router) { }

  ngOnInit(): void {
  }

   onSubmit(){
     this.service.postemploye(this.employe);
   }


   gotoaccueil(){
       const lien = ['accueil']; // const lien = ['accueil',this.employr];
       this.router.navigate(lien);
   }
}
