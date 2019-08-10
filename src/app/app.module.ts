import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule,ButtonModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeyFilterModule} from 'primeng/keyfilter';
import {FormsModule, NgModel} from '@angular/forms';
import {MarketComponent} from './components/market/market.component';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { CommonComponent } from './common/common.component';
import { ComponentsComponent } from './components/components.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { LoginComponent } from './components/login/login.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TabViewModule} from 'primeng/tabview';
import {UserService } from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {UpdatePriceComponent} from './components/update-price/update-price.component';
import {SecurityComponent} from './components/security/security.component';
import {TransforComponent} from './components/transfor/transfor.component';
import {FundComponent} from './components/fund/fund.component';
import {CreateFundComponent} from './components/create-fund/create-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DefaultPageComponent,
    CommonComponent,
    ComponentsComponent,
    NavigatorComponent,
    LoginComponent,
    MarketComponent,
    UpdatePriceComponent,
    SecurityComponent,
    TransforComponent,
    FundComponent,
    CreateFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    KeyFilterModule,
    FormsModule,
    TabViewModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
