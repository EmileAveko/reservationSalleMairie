import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientservService {
  remoteserveradress = 'https://projetmairieemile.netlify.app/client' ;
  localserveradress = 'http://localhost:8080/client';
  constructor(private http: HttpClient) { }

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

}
