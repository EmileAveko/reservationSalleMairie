import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
selectedFile: File = null;
em=null;
base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  retrievedImage: any;
  x:any;

  /*   color = 'blue';
   bgColor = 'yellow';
   show = false;
   @Input() filsprops = '';
   @Output() sendRequestToData = new EventEmitter();
*/
constructor( private http: HttpClient) { }


onFileSelected(event){
 this.selectedFile  =  event.target.files[0];
 this.x = document.getElementById("thepic");
}

onUpload(){
  const fd = new FormData();
  fd.append('imageFile', this.selectedFile , this.selectedFile.name);
/*
  let equipement ={
      nom: "kl",
      prix: 100.0,
      nomPhoto: 'kf e',
      photo: this.selectedFile
  };*/
  /*const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
   this.em=JSON.stringify(equipement);*/

   const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  this.http.post('http://localhost:8080/uploading',fd).toPromise().then(
   data =>{ console.log(data)}
  );
}

getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.http.get('http://localhost:8080/gets/' + this.imageName)
    .toPromise().then(
      res => {
        this.retrieveResonse = res;
        /*this.base64Data = this.retrieveResonse.photo;
        this.retrievedImage = 'data:'+this.retrieveResonse.type+';base64,' + this.base64Data;
        console.log(this.base64Data);
        console.log(this.retrieveResonse);*/
        this.retrievedImage = "http://localhost:8080/Images/static/gallery/upload/"+this.imageName;
        console.log(this.retrievedImage);
      }
    );

}


  ngOnInit(): void {
    // console.log('Fils component: voici la var du pater', this.filsprops);
  }
   /*changeStatus(){
     this.show = !this.show;
  }

  sendEvent(){
    this.sendRequestToData.emit(
      'lalaala'
    );

  }*/

}
