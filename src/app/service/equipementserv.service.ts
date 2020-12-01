import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipement } from '../model/equipement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementservService {



  remoteserveradress = 'https://projetmairieemile.netlify.app/salle' ;
  localserveradress = 'http://localhost:8080/equipement';
  constructor(private http: HttpClient) { }

  createEquipement(equipement: Equipement){

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.http.post(this.localserveradress, equipement).toPromise().then(
   data => { console.log(data);
             if (!data){
       alert('Enregistrer avec succès');
    }
  }
  );
  }

  createImage(form: any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.http.post('http://localhost:8080/uploading', form, { observe: 'response' }).toPromise().then(
      (response) => {
        if (response.status === 200) {
          console.log( 'Image uploaded successfully');
        } else {
          console.log( "Image doesn't uploaded successfully ");
        }
      });

  }


    getImage(imageName: string ): Observable<any> {
     return this.http.get('http://localhost:8080/gets/' + imageName);
    }

    getImages(): Observable<any>{
      return this.http.get('http://localhost:8080/equipements');
    }

  }
