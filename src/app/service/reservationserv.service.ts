import { Injectable } from '@angular/core';
import { Salle } from '../model/salle';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationservService {
  localserveradress = ' https://projet-gestion-mairie.herokuapp.com/';
  remoteserveradress = 'http://localhost:8080/';
  
  constructor(private http: HttpClient) { }

  deleteReservation(id: number) : Observable<any>{
   
   return this.http.delete(this.localserveradress+'reserver/'+id);

  }

  getReservation(id: number) : Observable<any>{
   
    return this.http.get(this.localserveradress+'reservations/'+id);
 
   }
 
   getSallebyId(i:number){
    this.http.get(this.localserveradress+'salles/'+i)
  }
  
  getSallebyReservation(i:Number){
    return this.http.get(this.localserveradress+'sallereserve/'+i)
  }
  
 

     findRoombyName(name: string): Observable<any>{
      return  this.http.get(this.localserveradress+'sallesnome/' + name);
     }

     setRoom(object: any){
      this.http.put(this.localserveradress+'saller', object).toPromise().then(
       data => { console.log(data); }
      );
    }

}