import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterComponent } from './Components/register/register.component';
import { AllcarsComponent } from './Components/allcars/allcars.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar'; 

import { AddEditCarComponent } from './Components/add-edit-car/add-edit-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteUserComponent } from './Components/users/delete-user/delete-user.component';
import { EditUserComponent } from './Components/users/edit-user/edit-user.component';
import { ListUserComponent } from './Components/users/list-user/list-user.component';
import { MatListModule } from '@angular/material/list';
import { UsercontentComponent } from './Components/users/usercontent/usercontent.component'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ViewUserComponent } from './Components/users/view-user/view-user.component';
import { MatCardModule } from '@angular/material/card';
import { TransactionsComponent } from './Components/transactions/transactions.component';
import { DealerComponent } from './Components/dealer/dealer.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button'; 
import { RouterModule } from '@angular/router';
import { OrderComponent } from './Components/order/order.component';
import { AddcarsComponent } from './Components/add-edit-car/addcars/addcars.component';
import { AddpriceComponent } from './Components/add-edit-car/addprice/addprice.component';
import { SuccessfulComponent } from './Components/successful/successful.component';
import { TransactionIdComponent } from './Components/transaction-id/transaction-id.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ProductionComponent } from './Components/production/production.component';
import { CreatecarComponent } from './Components/createcar/createcar.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { SuvsComponent } from './Components/modeltype/suvs/suvs.component';
import { OffRoadComponent } from './Components/modeltype/off-road/off-road.component';
import { PickuptrucksComponent } from './Components/modeltype/pickuptrucks/pickuptrucks.component';
import { MuvComponent } from './Components/modeltype/muv/muv.component';
import { HatchbackComponent } from './Components/modeltype/hatchback/hatchback.component';
import { SedanComponent } from './Components/modeltype/sedan/sedan.component';
import { BoleroComponent } from './Components/SUVs/bolero/bolero.component';
import { BoleroNeoComponent } from './Components/SUVs/bolero-neo/bolero-neo.component';
import { ScorpioClassicComponent } from './Components/SUVs/scorpio-classic/scorpio-classic.component';
import { ScorpioNComponent } from './Components/SUVs/scorpio-n/scorpio-n.component';
import { XUV700Component } from './Components/SUVs/xuv700/xuv700.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    RegisterComponent,
    AllcarsComponent,
    AddEditCarComponent,
    DeleteUserComponent,
    EditUserComponent,
    ListUserComponent,
    UsercontentComponent,
    SidebarComponent,
    ViewUserComponent,
    TransactionsComponent,
    DealerComponent,
    OrderComponent,
    AddcarsComponent,
    AddpriceComponent,
    SuccessfulComponent,
    TransactionIdComponent,
    OffersComponent,
    ProductionComponent,
    CreatecarComponent,
    LogoutComponent,
    SuvsComponent,
    OffRoadComponent,
    PickuptrucksComponent,
    MuvComponent,
    HatchbackComponent,
    SedanComponent,
    BoleroComponent,
    BoleroNeoComponent,
    ScorpioClassicComponent,
    ScorpioNComponent,
    XUV700Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    MatButtonModule,
    RouterModule


  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
