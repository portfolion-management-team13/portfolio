import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { MarketComponent } from './market/market.component';
import { UpdatePriceComponent } from '../components/update-price/update-price.component';
import { SecurityComponent } from './security/security.component';
import { TransforComponent } from './transfor/transfor.component';
import { FundComponent } from './fund/fund.component';
import { CreateFundComponent } from './create-fund/create-fund.component';


@NgModule({
  declarations: [LoginComponent, MarketComponent, UpdatePriceComponent, SecurityComponent, TransforComponent, FundComponent, CreateFundComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
