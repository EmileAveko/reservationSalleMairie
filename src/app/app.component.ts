import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-mairie';
  colors = 'lalp';

  processReq(message: any){
    alert(message);
  }
}