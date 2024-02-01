import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-mixwise',
  templateUrl: './mixwise.component.html',
  styleUrl: './mixwise.component.scss'
})
export class MixwiseComponent {
  public pieChart2 = chartData.pieChart2;
}
