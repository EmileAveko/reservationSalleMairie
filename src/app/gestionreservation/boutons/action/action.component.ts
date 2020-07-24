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
decision: string ='Acceptation';
action: string = 'Accepter';
email = new Email(null, null , null);
  constructor( private actionservice: ActionservService, private activatedRoute: ActivatedRoute) { }
   
  ngOnInit(): void {
  /*  this.activatedRoute.params.subscribe(
     (params) => { this.action = params['default'] ;} 
    )*/
}

envoyerMail(){
 this.actionservice.sendMail(this.email);
 console.log(this.email.message);
  //console.log(this.action);
}

}
