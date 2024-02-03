import { Component, Input } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-rmreceipt',
  templateUrl: './rmreceipt.component.html',
  styleUrl: './rmreceipt.component.scss'
})
export class RmreceiptComponent {
  @Input() public name: string | undefined;
  public pieChart2 = chartData.pieChart2;
}
