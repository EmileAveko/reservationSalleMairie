import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  CurrentHour: number;
  CurrentMinutes: number;
  CurrentSeconds: number;
  CurrentDays: number;
  CurrentYears: number;
  CurrentMonths: number;
  employe = 'employe';
  gardien = 'gardien';

  ngOnInit(): void {
  }

  constructor() {
    setInterval(() => {
      this.CurrentMonths = new Date().getUTCMonth() + 1;
      this.CurrentDays = new Date().getDay();
      this.CurrentYears = new Date().getFullYear();
      this.CurrentHour = new Date().getHours();
      this.CurrentMinutes = new Date().getMinutes();
      this.CurrentSeconds = new Date().getSeconds();
      }, 1);
  }
}
