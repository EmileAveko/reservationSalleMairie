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

  isVisible = false;
  places = [ 100, 200, 300];
  surfaces = [ 25, 30, 40, 50];
  salle = new Salle(null, null, null, null, null, null, null, null);
  constructor(private salleserv: SalleservService, private router: Router) { }

  ngOnInit(): void {
    this.places.push(400);
    this.surfaces.splice(1, 1);
  }


  createSalle(){
    const link = ['client'];
    this.router.navigate(link);
    this.salleserv.createSalle(this.salle);
    console.log(this.salle);
  }
}
