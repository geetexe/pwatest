import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'not-found',
    loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: 'employees',
    loadChildren: () => import('./views/emp-data/emp-data.module').then(m => m.EmpDataModule),
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
