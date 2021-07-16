import { Component, OnInit } from '@angular/core';
import { Clientaccueil } from 'src/app/model/clientaccueil';
import { SalleservService } from 'src/app/service/salleserv.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  prix: string;
  listSalle: Array<Clientaccueil>;
  clc = new Clientaccueil(null,null, null, null, null, null, null, null, null, null , null, null, null, null, null);
  constructor(private salle: SalleservService , private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
        this.salle.retrieveRoomforhomePage().toPromise().then(
    res => {
             this.listSalle = res ;
             console.log(res);
           }

    );
  }

 
    
  
   

}