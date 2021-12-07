import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [
  ]
})
export class ClassComponent implements OnInit {

  cAlert: string = "alert-danger";
  loading: boolean = false;
  propierties: any = {
    danger: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  ejecute(){
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);
  }

}
