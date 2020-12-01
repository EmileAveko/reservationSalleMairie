import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Salle } from '../model/salle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleservService {

  remoteserveradress = 'https://projetmairieemile.netlify.app/salle' ;
  localserveradress = 'http://localhost:8080/salle';
  constructor(private http: HttpClient) { }

  createSalle(salle: Salle){

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.http.post(this.localserveradress, salle).toPromise().then(
   data => { console.log(data);
             if (!data){
       alert('Enregistrer avec succès');
    }
  }
  );
  }


  retrieveRoomforhomePage(): Observable<any>{
   return  this.http.get('http://localhost:8080/sallesacceuil');

  }


  retrievefreeRoomforhomePage(): Observable<any>{
    return  this.http.get('http://localhost:8080/info');

   }


  }
