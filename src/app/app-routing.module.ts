import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { WinComponent } from './win/win.component';
import { CoinPrizeComponent } from './coin-prize/coin-prize.component';
import { TestComponent } from './test/test.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'coin-prize',
    component: CoinPrizeComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'win',
    component: WinComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
