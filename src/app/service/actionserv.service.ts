import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Email } from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class ActionservService {
  localserveradress = 'http://localhost:8080/sendmail';
  remoteserveradress = 'https://projetmairieemile.netlify.app/sendmail';
  constructor(private http: HttpClient) { }

  sendMail(email: Email){
    // tslint:disable-next-line: max-line-length
    this.http.get(this.localserveradress + '/' + email.senderMail + '/' + email.subject + '/' + email.message).toPromise().then(res => {
   console.log(res);
    });

  }
}
