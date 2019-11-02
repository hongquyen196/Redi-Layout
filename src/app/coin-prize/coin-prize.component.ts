import { Component, OnInit } from '@angular/core';
declare const Countdown: any;

@Component({
  selector: 'app-coin-prize',
  templateUrl: './coin-prize.component.html',
  styleUrls: ['./coin-prize.component.css']
})
export class CoinPrizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Countdown.init();
  }
  
}
