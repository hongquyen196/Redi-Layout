import { Component, OnInit } from '@angular/core';
declare const odometer: any;
@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.css']
})
export class LuckyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      odometer.innerHTML = this.randomNumbers();
    }, 2000);
  }

  randomNumbers = () => {
    var val = Math.floor(Math.random() * 999);
    return ('000' + val).slice(-3);
  };

}

