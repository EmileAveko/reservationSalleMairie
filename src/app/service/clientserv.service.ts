import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';
import { Equipement } from '../model/equipement';

@Injectable({
  providedIn: 'root'
})
export class ClientservService {
  remoteserveradress = 'https://projetmairieemile.netlify.app/client' ;
  localserveradress = 'http://localhost:8080/client';
  anotherlocalserveraddres ='http://localhost:8080/saller';
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  createClient(client: Client){

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.http.post(this.localserveradress, client).toPromise().then(
   data => { console.log(data);
             if (!data){
       alert('Enregistrer avec succès');
    }
  }
  );
  }

 makeReservation(r: Reservation){
  this.http.post('http://localhost:8080/reservation', r).toPromise().then(
    data => { console.log(data);
              if (!data){
        alert('Enregistrer avec succès');
     }
   }
   );
   }

   updateReservation(r: Reservation){
    this.http.put('http://localhost:8080/reservationner', r).toPromise().then(
      data => { console.log(data);
                if (!data){
         // alert('Enregistrer avec succès');
       }
     }
     );
     }

     updateEquipemnt(e: Equipement){
      this.http.put('http://localhost:8080/equipementtier', e).toPromise().then(
        data => { console.log(data);
                  if (!data){
           // alert('Enregistrer avec succès');
         }
       }
       );
       }



  findRoombyName(name: string): Observable<any>{
    return  this.http.get('http://localhost:8080/sallesnome/' + name);
   }

   findClientbyMail(mail: string): Observable<any>{
    return  this.http.get('http://localhost:8080/clientes/' + mail);
   }


   setRoom(object: any){
     this.http.put(this.anotherlocalserveraddres, object).toPromise().then(
  data => { console.log(data); }
     );
   }
}
