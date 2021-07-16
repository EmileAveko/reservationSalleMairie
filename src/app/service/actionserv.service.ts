import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Email } from '../model/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionservService {
  localserveradress =   'https://projet-gestion-mairie.herokuapp.com/';
  remoteserveradress = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  sendMail(email: Email) : Observable<any>{
    // tslint:disable-next-line: max-line-length
   return this.http.get(this.localserveradress+'sendmail' + email.senderMail + '/' + email.subject + '/' + email.message);

  }
}
