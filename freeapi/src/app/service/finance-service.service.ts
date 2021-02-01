// import {Injectable, NgModule} from '@angular/core';
// import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {Finance} from '../modules/finance';
// import {CommonModule} from '@angular/common';
// import {FormsModule} from '@angular/forms';
// import {IonicModule} from '@ionic/angular';
// import {FinancePageRoutingModule} from '../pages/finance/finance-routing.module';
// import {FinancePage} from '../pages/finance/finance.page';
//
// @Injectable({
//   providedIn: 'root'
// })
// @NgModule({
//   imports: [
//     HttpClientModule,
//       // HttpClient
//   ],
//   declarations: []
// })
// export class FinanceServiceService {
//   financeUrl = 'http://localhost:8080/api/index/hotStock';
//   constructor(
//       private http: HttpClient
//   ) { }
//
//   getFinanceList(): Observable<Finance[]> {
//     return this.http.get<Finance[]>(this.financeUrl);
//   }
//
//   // getTodo() {
//   //
//   // }
//
//   // addTodo() {
//   //
//   // }
// }
