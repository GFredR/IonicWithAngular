import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import {SlideModuleModule} from '../../modules/slide/slide-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
      SlideModuleModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
