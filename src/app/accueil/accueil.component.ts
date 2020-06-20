import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
   color = 'blue';
   bgColor = 'yellow';
   show = false;
   @Input() filsprops = '';
   @Output() sendRequestToData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('Fils component: voici la var du pater',this.filsprops);
  }
  changeStatus(){
     this.show = !this.show;
  }

  sendEvent(){
    this.sendRequestToData.emit(
      'lalaala'
    );

  }

}
