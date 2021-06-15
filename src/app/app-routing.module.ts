import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Error404Component } from './ui/error404/error404.component';
import { Tab1Component } from './ui/tabs/tab1/tab1.component';
import { Tab2Component } from './ui/tabs/tab2/tab2.component';
import { Tab3Component } from './ui/tabs/tab3/tab3.component';

const routes: Routes = [
  { path: '', component: Tab1Component },
  { path: 'tab1', component: Tab1Component },
  { path: 'tab2', component: Tab2Component },
  { path: 'tab3', component: Tab3Component },
  {path: '**', component: Error404Component},
  {
    path: 'outlets-modal',
    loadChildren: () => import('./ui/elements/outlets-modal/outlets-modal.module').then( m => m.OutletsModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
