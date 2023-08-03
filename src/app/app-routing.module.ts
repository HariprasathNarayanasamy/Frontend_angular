import { AllcarsComponent } from './Components/allcars/allcars.component';
import { ViewUserComponent } from './Components/users/view-user/view-user.component';
import { AddEditCarComponent } from './Components/add-edit-car/add-edit-car.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ListUserComponent } from './Components/users/list-user/list-user.component';
import { EditUserComponent } from './Components/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './Components/users/delete-user/delete-user.component';
import { UsercontentComponent } from './Components/users/usercontent/usercontent.component';
import { TransactionsComponent } from './Components/transactions/transactions.component';
import { DealerComponent } from './Components/dealer/dealer.component';
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



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'cars/models', component: AddEditCarComponent},
  {path: 'usercontent', component: UsercontentComponent},
  {path: 'orders', component: AllcarsComponent},
  {path: 'dealer', component: DealerComponent},


  {path: 'users',
   children:[
    {path: 'list',component: ListUserComponent},
    {path: 'edit', component: EditUserComponent },
    {path: ':user_id', component: DeleteUserComponent},
    {path: 'view/:user_id', component: ViewUserComponent },

   ]},

  {path: 'models',
   children:[
    {path: 'SUVs', component: SuvsComponent},
    {path: 'off road', component: OffRoadComponent},
    {path: 'pickuptruck', component: PickuptrucksComponent},
    {path: 'MUV', component: MuvComponent},
    {path: 'Hatchback', component: HatchbackComponent},
    {path: 'Sedan', component: SedanComponent}
  ]},

  

  {path: 'model_name',
    children:[
      {path: 'Bolero', component: BoleroComponent},
      {path: 'Bolero-NEO', component: BoleroNeoComponent},
      {path: 'Scorpio-N', component: ScorpioNComponent},
      {path: 'XUV700', component: XUV700Component},
      {path: 'Scorpio Classic', component: ScorpioClassicComponent}
  ]},

   {path: 'transactions', component: TransactionsComponent},
   {path: 'order', component: OrderComponent},
   {path: 'addcar', component: AddcarsComponent},
   {path: 'addprice/:model_id', component: AddpriceComponent},
   {path: 'success', component:SuccessfulComponent},
   {path: 'transactionID', component:TransactionIdComponent},
   {path: 'offers', component: OffersComponent},
   {path: 'production', component: ProductionComponent },
   {path: 'createcar', component: CreatecarComponent},
   {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
