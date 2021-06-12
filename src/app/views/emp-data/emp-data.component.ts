import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.scss']
})
export class EmpDataComponent implements OnInit, OnDestroy {

  loading:boolean = true;
  empList:[] = [];
  private subscriptions = new Subscription();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.initEmpData();
  }

  initEmpData(){
    this.subscriptions.add(
      this.data.getData().subscribe(
        res => {
          this.empList = res;
          this.loading = false;
        },
        err => {
          this.loading = false;
        }
      )
    )
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

}
