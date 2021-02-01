import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpClientModule} from '@angular/common/http';
// import {FinanceServiceService} from '../../service/finance-service.service';
import {Finance, FinanceData, FinanceItem} from '../../modules/finance';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  finData: FinanceData;
  finItem: FinanceItem;
  finNameList: Finance[];
  isLoading = false;
  financeUrl = 'http://localhost:8080/api/index/hotStock';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.financeUrl).subscribe((res: any) => {
      this.finNameList = res.data.items;
    });
    // this.getFinanceList().subscribe(res => {
    //   if (res) {
    //     // this.finNameList = res.financeData;
    //     // this.finItem.item = res.financeData.item;
    //     // this.finNameList = this.finItem.item;
    //     console.log(res.item);
    //   }
    // }, error => {
    //   console.log(error);
    // });
    // this.financeService.getFinanceList().subscribe(res => {
    //   console.log(res);
    // });
    // const reqsUrl = 'http://localhost:8080/api/index/hotStock';
    // this.http.get(reqsUrl).subscribe((response: any) => {
    //   console.log(response);
    //   this.result = response.data.items;
    //   console.log(this.result);
    // });
    // this.http.get(reqsUrl).subscribe(data: any => {
    //   // data
    //   this.result = data;
    //   console.log(this.result);
    // });
    // console.log(this.result);
  }
  getFinanceList(): Observable<FinanceItem> {
    return this.http.get<FinanceItem>(this.financeUrl);
  }
  // test() {
  //   const reqsUrl = 'http://localhost:8080/api/index/hotStock';
  //   this.http.get(reqsUrl, {observe: 'response'}).subscribe(data => {
  //     this.result = data;
  //     console.log(this.result);
  //   });
  //   console.log(this.result);
  // }
}
