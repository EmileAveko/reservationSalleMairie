import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Employe } from '../model/employe';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeservService {
  localserveradress = 'http://localhost:8080/employe';
  remoteserveradress = 'https://projetmairieemile.netlify.app/employe' ;

  constructor(private http: HttpClient) { }
  postemploye(em: Employe){

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.http.post(this.localserveradress, em).toPromise().then(
   data => { console.log(data);
             if (!data){
       alert('bien logger');
    }
  }
  );
  }


  retrieveEmployes(): Observable<any>{
    return  this.http.get('http://localhost:8080/employes');
 }

   retrieveGardiens(): Observable<any>{
    return  this.http.get('http://localhost:8080/gardiens');

   }

   retrieve1RoomforhomePage(): Observable<any>{
    return  this.http.get('http://localhost:8080/sallesacceuil');

   }


}
