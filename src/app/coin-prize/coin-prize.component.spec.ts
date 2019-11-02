import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPrizeComponent } from './coin-prize.component';

describe('CoinPrizeComponent', () => {
  let component: CoinPrizeComponent;
  let fixture: ComponentFixture<CoinPrizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPrizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
