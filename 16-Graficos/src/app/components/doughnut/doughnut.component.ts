import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
})
export class DoughnutComponent{

// Doughnut
public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { data: [ 350, 450, 100 ] },
    { data: [ 50, 150, 120 ] },
  ]
};
public doughnutChartType: ChartType = 'doughnut';

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public randomNumbers(  ) 
{
  this.doughnutChartData = {
    datasets: [
      { data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)] },
    ]
  }

}
}
