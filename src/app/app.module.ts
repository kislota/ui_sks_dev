import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { CashboxComponent } from './cashbox/cashbox.component';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ClientComponent,
    ClientsComponent,
    OrderComponent,
    OrdersComponent,
    CashboxComponent,
    StockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
