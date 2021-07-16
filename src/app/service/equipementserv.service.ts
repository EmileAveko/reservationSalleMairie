import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipement } from '../model/equipement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementservService {



  remoteserveradress = 'http://localhost:8080/' ;
  localserveradress = 'https://projet-gestion-mairie.herokuapp.com/';
  constructor(private http: HttpClient) { }

  createEquipement(equipement: Equipement){

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.http.post(this.localserveradress+'equipement', equipement).toPromise().then(
   data => { console.log(data);
             if (!data){
       alert('Enregistrer avec succès');
    }
  }
  );
  }

  createImage(form: any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.http.post(this.localserveradress+'uploading', form, { observe: 'response' }).toPromise().then(
      (response) => {
        if (response.status === 200) {
          console.log( 'Image uploaded successfully');
        } else {
          console.log( "Image doesn't uploaded successfully ");
        }
      });

  }


    getImage(imageName: string ): Observable<any> {
     return this.http.get(this.localserveradress+'gets/' + imageName);
    }

    getImages(): Observable<any>{
      return this.http.get(this.localserveradress+'equipements');
    }

  }
