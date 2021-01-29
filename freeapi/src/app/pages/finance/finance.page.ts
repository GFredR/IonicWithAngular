import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  result: any[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const reqsUrl = 'http://localhost:8080/api/index/hotStock';
    this.http.get(reqsUrl).subscribe((response: any) => {
      console.log(response);
      this.result = response.data.items;
      console.log(this.result);
    });
    // this.http.get(reqsUrl).subscribe(data: any => {
    //   // data
    //   this.result = data;
    //   console.log(this.result);
    // });
    // console.log(this.result);
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
