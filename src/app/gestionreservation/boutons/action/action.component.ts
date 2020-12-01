import { Component, OnInit } from '@angular/core';
import { ActionservService } from 'src/app/service/actionserv.service';
import { Email } from 'src/app/model/email';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
decision = 'Acceptation';
action = 'Accepter';
mail = '';
email = new Email(null, null , null);
  constructor( private actionservice: ActionservService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
         console.log(params);
         this.mail = params.id ;
         console.log(this.mail);
         this.email.senderMail = this.mail;
      }

      );

}

envoyerMail(){

this.actionservice.sendMail(this.email).toPromise().then(
 data => {

  console.log(data);
  if (data.headers.status === 200){
alert('mail envoyer avec succès');
  }
});
console.log(this.email);
  // console.log(this.action);
}

}
