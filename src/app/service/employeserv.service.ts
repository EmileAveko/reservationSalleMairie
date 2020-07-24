import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Employe } from '../model/employe';


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
}
