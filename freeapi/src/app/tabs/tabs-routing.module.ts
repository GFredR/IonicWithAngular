import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        loadChildren: () => import('../pages/news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'entertainment',
        loadChildren: () => import('../pages/entertainment/entertainment.module').then(m => m.EntertainmentPageModule)
      },
      {
        path: 'finance',
        loadChildren: () => import('../pages/finance/finance.module').then(m => m.FinancePageModule)
      },
      {
        path: 'mine',
        loadChildren: () => import('../pages/mine/mine.module').then(m => m.MinePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
