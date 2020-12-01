import { Component, OnInit } from '@angular/core';
import { SalleservService } from '../service/salleserv.service';
import { Clientaccueil } from '../model/clientaccueil';

@Component({
  selector: 'app-clientaccueil',
  templateUrl: './clientaccueil.component.html',
  styleUrls: ['./clientaccueil.component.scss']
})
export class ClientaccueilComponent implements OnInit {
  listSalle: Array<Clientaccueil> = [];
  clc = new Clientaccueil(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  constructor(private salleservice: SalleservService) { }

  ngOnInit(): void {
    this.salleservice.retrieveRoomforhomePage().toPromise().then(
      res => {
        this.listSalle = res ;
       // console.log(res);
      }

      );
    this.onComplete();
  //  this.listSalle.push(new Clientaccueil("d","23-16-17","an@ml","libre",12,13,"ma",13,13,"21-12-09","24-11-08","mp",null, null));

    console.log(this.listSalle);
  }

  afficherprix(g: Clientaccueil){
  if (g.prix === 0 || g.prix === null){
    return 'gratuit pour tous';
  }
  if (g.prix >= 0){
       return 'Uniquement pour particulier a ' + g.prix + ' FCFA' ;
   }

  }

   onComplete(){
    this.salleservice.retrievefreeRoomforhomePage().toPromise().then(
      res => {
        for (const r of res){
          // tslint:disable-next-line: max-line-length
          this.listSalle.push(new Clientaccueil(  null , null, null, null, r.capmin, r.capmax, null, r.prix, null, null, null, r.nomsal, r.surface, r.adress));

        }
        console.log(res);

      }

      );
   }
}
