import { Component, OnInit } from '@angular/core';
declare const Countdown: any;

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  rankingList = [
    {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    },
    {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'Fan cứng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'tv. vàng',
      exp: '1.999.999'
    }, {
      avatar: '../../assets/img/ranking/avatar.png',
      name: 'Alice Nguyen',
      role: 'tv. bạc',
      exp: '1.999.999'
    }
  ]
  listLeft = [];
  listRight = [];

  ngOnInit() { 
    Countdown.init();
    this.listLeft = this.rankingList.splice(0, 5);
    this.listRight = this.rankingList;
  }
}
