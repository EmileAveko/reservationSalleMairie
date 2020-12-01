import { Component, OnInit } from '@angular/core';
import { SalleservService } from '../service/salleserv.service';
import { Salle } from '../model/salle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {
  i = 0;
  isVisible = false;
  placesmax = [ 100, 200, 300];
  placesmin = [30, 50, 80];
  surfaces = [ 25, 30, 40, 50];
  salle = new Salle(null, null, null, null, null, null, null, null);
  constructor(private salleserv: SalleservService, private router: Router) { }

  ngOnInit(): void {
    this.salleserv.retrieveRoomforhomePage().toPromise().then(
      res => {
       // this.listSalle = res ;
        console.log(res);
      }
  
      );

  }


  createSalle(){
    // const link = ['client'];
    // this.router.navigate(link);
    if (this.salle.nomsal && this.salle.adress)
    {
      this.salleserv.createSalle(this.salle);
      alert('Enregistrement éffectué');
    }
    else{
      alert('Veuillez remplir tous les champs');
    }
   }
 }
