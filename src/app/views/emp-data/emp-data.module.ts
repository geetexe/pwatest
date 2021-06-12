import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDataComponent } from './emp-data.component';
import { DataService } from 'src/app/services/data.service';
import { LoaderComponent } from 'src/app/generic/loader/loader.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component: EmpDataComponent
  }
]

@NgModule({
  declarations: [
    EmpDataComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ DataService ]
})
export class EmpDataModule { }
