import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Salle } from '../model/salle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleservService {

  remoteserveradress =  'http://localhost:8080/';
  localserveradress = 'https://projet-gestion-mairie.herokuapp.com/';
  constructor(private http: HttpClient) { }

  createSalle(salle: Salle){

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.http.post(this.localserveradress+'salle', salle).toPromise().then(
   data => { console.log(data);
             if (!data){
       alert('Enregistrer avec succès');
    }
  }
  );
  }


  retrieveRoomforhomePage(): Observable<any>{
   return  this.http.get(this.localserveradress+'sallesacceuil');
  }


  retrievefreeRoomforhomePage(): Observable<any>{
    return  this.http.get(this.localserveradress+'info');

   }

   getSalle(i:number): Observable<any>{
     return this.http.get(this.localserveradress+'salles/'+i)
   }
   
   updateSalle(s: Salle){
    this.http.put(this.localserveradress+'saller', s).toPromise().then(
      data => { console.log(data);
                if (!data){
         // alert('Enregistrer avec succès');
       }
     }
     );
     }

  }
