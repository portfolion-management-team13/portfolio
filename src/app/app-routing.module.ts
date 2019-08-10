import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {DefaultPageComponent} from './default-page/default-page.component';
import {LoginComponent} from './components/login/login.component';
import {MarketComponent} from './components/market/market.component';
import {UpdatePriceComponent} from './components/update-price/update-price.component';
import {SecurityComponent} from './components/security/security.component';
import {TransforComponent} from './components/transfor/transfor.component';
import {FundComponent} from './components/fund/fund.component';
import {CreateFundComponent} from './components/create-fund/create-fund.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"default",component:DefaultPageComponent},
  {path:"home",component:HomePageComponent,children:[

    {path:'FundManagement', component:MarketComponent},

    {path:'UpdatePrice', component:UpdatePriceComponent},

    {path:'Security',component:SecurityComponent},

    {path:'Transfor',component:TransforComponent},

    {path:'Fund',component:FundComponent},

    {path:'CreateFund',component:CreateFundComponent}


]

},
  {path:"login",component:LoginComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
