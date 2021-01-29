import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor() { }
  // tslint:disable-next-line:use-lifecycle-interface
  // ngOnChanges() {
  //   console.log('数据发生变化时调用');
  // }
  ngOnInit() {
    console.log('第一次显示数据绑定和指令输入后调用，只调用一次');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  // ngDoCheck() {
  //   console.log('在ngOnChanges和ngOnInit发生后，进行一次检测');
  // }
  // // tslint:disable-next-line:use-lifecycle-interface
  // ngAfterContentInit() {
  //   console.log('数据内容渲染到视图之后执行');
  // }
  // // tslint:disable-next-line:use-lifecycle-interface
  // ngAfterContentChecked() {
  //   console.log('数据内容渲染到视图检测后');
  // }
  // // tslint:disable-next-line:use-lifecycle-interface
  // ngAfterViewInit() {
  //   console.log('视图初始化之后执行');
  // }
  // // tslint:disable-next-line:use-lifecycle-interface
  // ngAfterViewChecked() {
  //   console.log('视图检测之后');
  // }
  // // tslint:disable-next-line:use-lifecycle-interface
  // ngOnDestroy() {
  //   console.log('销毁组件');
  // }
}
