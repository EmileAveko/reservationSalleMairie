import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipement } from '../model/equipement';
import { Imageequipement } from '../model/imageequipement';
import { EquipementservService } from '../service/equipementserv.service';

@Component({
  selector: 'app-gestionequipement',
  templateUrl: './gestionequipement.component.html',
  styleUrls: ['./gestionequipement.component.scss']
})
export class GestionequipementComponent implements OnInit {

  Images = Array<Imageequipement>();
  equipement = new Equipement(null, null, null, this.Images, null);
  selectedFile: File = null;
  x: any;
  fd: any;

constructor(private equipementserv: EquipementservService) { }

ngOnInit(): void {
}

onFileSelected(event){
 this.selectedFile  =  event.target.files[0];

}

onUpload(){
  const uploadImage = new FormData();
  uploadImage.append('imageFile', this.selectedFile);
  this.equipement.listImageEquipement.push(new Imageequipement(this.selectedFile.name));
  this.equipementserv.createImage(uploadImage);
  console.log(uploadImage);
  this.equipementserv.createEquipement(this.equipement);


}

}
