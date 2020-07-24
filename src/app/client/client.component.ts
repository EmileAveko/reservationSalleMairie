import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../model/client';
import { Reservation } from '../model/reservation';
import { ClientservService } from '../service/clientserv.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  isOrganisation = false;
  wantEquipement = false;
  reservation = new Reservation(null, null, null, null );
  empList: Array<Reservation> = [];
  client = new Client(null, null, null, null, null, this.empList);
  constructor(private clientser: ClientservService) { }

  ngOnInit(): void {}
  onModify()
  {
   this.client.listreservation.push(this.reservation);
   console.log(this.client);
   this.clientser.createClient(this.client);
  }
}
