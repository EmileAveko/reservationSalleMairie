import { Component, OnInit } from '@angular/core';
import { ActionservService } from 'src/app/service/actionserv.service';
import { Email } from 'src/app/model/email';
import { ReservationservService } from 'src/app/service/reservationserv.service';
import { Reservation } from 'src/app/model/reservation';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
heuredep;
heurefin;
nomclient;
nomev;
idreserv ;
etatsalle;
nomSalle;
modele=''
email = new Email(null, null , null);
reservation = new Reservation(null,null,null,null,null,null,null);
reserv ;
id;
mot='';
dialog =' ';


  constructor( private actionservice: ActionservService,private reservationservice: ReservationservService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
         console.log(params);
         this.email.senderMail = params.mail;
         this.idreserv = params.idreserv;
         this.nomev = params.evnom  
         this.nomclient = params.nomclient
         this.heuredep = params.hrdep
         this.heurefin = params.hrfin
         this.nomSalle = params.nomsal
      }
        
      );
      console.log(this.idreserv);
}

envoyerMail(){

  
  this.dialog =this.mot+" Etes vous sure de cette décision?!"
 if( confirm(this.dialog)=== true){
  this.actionservice.sendMail(this.email).toPromise().then(
    data => {
   
     console.log(data);
   
    ;
   
   }).catch((e)=>  {
     console.log(e);
     if(e.status===200){
   
      this.onchangeStatus(this.mot) 
     alert('Mail envoyer avec succès')

    
   
   }  else {
     alert('Erreur , Veuillez vérifier  l\'email saisie ainsi que votre connection');
   
   }});
   console.log(this.email);
    

 }

 else{

 }

}

getReservation(){
 this.reservationservice.getReservation(this.idreserv).toPromise().then(
   res=>{ 
       this.reservation=res
    
   }
 ).catch( e=> {
    console.log(e);
   
 })
return this.reservation
 
}

choice(message){
  this.mot = message
  this.email.subject = message+': Décision en rapport a votre demande de réservation  '
  if(message ==="Annulée")
  {this.delReservation(this.idreserv)}

  this.email.message = ' Bonjour, '+this.nomclient+' \n. Nous vous tenons informer du fait que votre demande de réservation pour '+this.nomev+' pour la période du '+this.heuredep +' au '+this.heurefin +' est. \n' +message+' La mairie vous remercie et vous souhaite une bonne journée \n'
}



delReservation(rev: number){
 this.reservationservice.deleteReservation(rev).toPromise().then(
   data =>{
     
   }
 )
}

 onchangeStatus(message){
    
   if(message==='Annulée')
   {this.etatsalle='libre'}
   if(message==='Rejetée')
   {this.etatsalle='en traitement'}
   else{
     this.etatsalle='occupé'
   }
 this.reservationservice.findRoombyName(this.nomSalle).toPromise().then(
  res => {
           console.log(res);
          res.etat = this.etatsalle;
          this.reservationservice.setRoom(res);
        
         }
       );
      }
}

