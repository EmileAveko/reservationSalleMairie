import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../model/client';
import { Reservation } from '../model/reservation';
import { ClientservService } from '../service/clientserv.service';
import { ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { Reservationequipement } from '../model/reservationequipement';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  tab: any;
  reg = new RegExp('^[0-9]+$');
  nomSalle = '';
  min: number ;
  max: number;
  heuredep: Date;
  heurefin: Date ;
  today = new Date();
  tomorrow = new Date(new Date().setDate(new Date().getDay() + 2) );
  isOrganisation = false;
  wantEquipement = false;
  reservation = new Reservation( this.getRandomArbitrary(0, 200), null, null, null, null, null, null );
  empList: Array<Reservation> = [];
  a = 0;
  client = new Client(null, null, null, null, null, this.empList);



  constructor(private clientser: ClientservService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe(
   (params) => {
      console.log(params);
      this.nomSalle = params.nomSalle ;
      this.min = params.capmin ;
      this.max = params.capmax ;
      this.heuredep = params.heuredep;
      this.heurefin = params.heurefin;

      if (new Date(this.heuredep) && new Date(this.heurefin)){
        this.tomorrow = new Date(this.heurefin);
      }
   }

   );

  }
  onModify()
  {
   console.log( new Date(this.reservation.heuredep));
   if (!this.comparingDate(new Date(this.reservation.heuredep), new Date(this.reservation.heurefin))){
       alert('saisissez bien les dates !');
    }

   if (this.min && this.max){
   if (!this.validateNumber(this.reservation.nbrpers)){
    alert('Veuillez saisir un nombre de personnes compris entre ' + this.min + ' et ' + this.max);
   }
  }
   if (!this.validateEmail(this.client.mail)){
    alert('Veuillez saisir une bonne adresse mail');
  }else{
    console.log(this.client);

  }

   // tslint:disable-next-line: max-line-length
   if (this.comparingDate(new Date(this.reservation.heuredep), new Date(this.reservation.heurefin)) && this.validateEmail(this.client.mail) && this.validateNumber(this.reservation.nbrpers)){
  this.client.listreservation.push(this.reservation);
  this.clientser.createClient(this.client);
  this.onadd();
  alert('Demande bien enregistrer');
  this.a = 1;

   }

  }


   onadd(){
     this.clientser.findRoombyName(this.nomSalle).toPromise().then(
       res => {
         console.log(res);
         res.etat = 'en traitement';
         if (res.listReservations){
         res.listReservations.push(this.reservation);
         this.clientser.setRoom(res);
        }
        else{
         const i = res;
         const list = Array<Reservation>();
         list.push(this.reservation);
         i.listReservations = list;
         this.clientser.setRoom(i);
        }
       }
     );

   }


   validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
   validateNumber(numbers) {
   if (numbers > this.max || numbers < this.min){
     return false;
   }else{
     return true;
   }
  }

    comparingDate(db: Date , de: Date){
      const date = new Date();
      if (db && de){
      if (db < date || de < date){
        alert('veuillez saisir une date correcte');
      }else{
        if ( db < de){
          return true;
        }else{
          return false;
        }
      }

    }
    else{
      return false;
    }
    }

    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
  }

    processRequest(message){

    if (this.a >= 1 && message.length >= 1){
     console.log(message);

     this.reservation.reservationequipement = [];


     for (const mes of message){
       if (!mes.reservationequipement){
       mes.reservationequipement = [];
      }
       const a = this.getRandomArbitrary(0, 100) + 1;
       mes.reservationequipement.push(new Reservationequipement(a));
       this.reservation.reservationequipement.push(new Reservationequipement(a));
       this.clientser.updateEquipemnt(mes);
       this.clientser.updateReservation(this.reservation);
     }

    }
     else{
       alert('Veuillez envoyer de manière correcte les informations précédentes. Merci !');
     }

    }



}


