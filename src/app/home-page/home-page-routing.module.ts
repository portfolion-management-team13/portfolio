import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MarketComponent} from '../components/market/market.component';



const routes: Routes = [
  {path:"abc",component:MarketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
