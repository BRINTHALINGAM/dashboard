import { Component, Input } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-topsuppliers',
  templateUrl: './topsuppliers.component.html',
  styleUrl: './topsuppliers.component.scss'
})
export class TopsuppliersComponent {
  @Input() public name: string | undefined;
  public columnChart2 = chartData.columnChart2;
}
