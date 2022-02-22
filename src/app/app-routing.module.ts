import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bootstrap', loadChildren: () => import('./pages/bootstrap-page/bootstrap-page.module').then(m => m.BootstrapPageModule) },
  { path: 'ng-bootstrap', loadChildren: () => import('./pages/ng-bootstrap-page/ng-bootstrap-page.module').then(m => m.NgBootstrapPageModule) },
  { path: 'ngx-bootstrap', loadChildren: () => import('./pages/ngx-bootstrap-page/ngx-bootstrap-page.module').then(m => m.NgxBootstrapPageModule) },
  { path: '', redirectTo: '/bootstrap', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
