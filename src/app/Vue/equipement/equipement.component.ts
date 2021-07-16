import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EquipementservService } from 'src/app/service/equipementserv.service';
import { Equipement } from 'src/app/model/equipement';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit {
  equip: Equipement;
  alternative = '/assets/images/client/bg-01.jpg';
  Equipements: Array<Equipement> = [];
  prix = [];
  equips = [];
   @Output() sendRequestToData = new EventEmitter();
  constructor(private equipserv: EquipementservService) { }
  adress= 'https://projet-gestion-mairie.herokuapp.com/' // 'http://localhost:8080/'
  link = this.adress+'Images/static/gallery/upload/';
  ngOnInit(): void {

    this.equipserv.getImages().toPromise().then(
      data => {
         this.Equipements = data;
         console.log(data);
      }
    );

  }
  onAdd(equip: Equipement){
    this.equips.push(equip);
    this.prix.push(equip.prix);

  }

  validate(){
    let somme = 0;
    for (const som  of this.prix){
      somme += som ;
    }
    alert('Pour les équipements ca fera un total de' + somme);
    this.prix = [];
    this.sendEvent();
  }

  sendEvent(){
    this.sendRequestToData.emit(
    this.equips,
    );
  }
}
