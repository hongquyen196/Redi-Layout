import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  page1: Boolean = true;

  ngOnInit() {
      setInterval(() => {
        console.log(1);
        this.page1 = !this.page1;
      }, 5000);
  }
}
