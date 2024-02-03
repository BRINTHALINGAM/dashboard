import { Component } from '@angular/core';
import { commonData } from '../../../../shared/data/component/widget/general/general';

@Component({
  selector: 'app-sales-purchase',
  templateUrl: './sales-purchase.component.html',
  styleUrls: ['./sales-purchase.component.scss']
})
export class SalesPurchaseComponent {

  public commonData =  [
    {
        icon: 'cart',
        values: '17',
        title: 'No. of Variety',
        color: 'secondary'
    },
    {
        icon: 'Home',
        values: '3053 / 1050.96',
        title: 'Opening Stock',
        color: ' success',
        
    },
    {
        icon: 'rate',
        values: '1471 / 539.86',
        title: 'Receipt',
        color: ' warning',
        
    },
    {
        icon: 'return-box',
        values: '0 / 0',
        title: 'SR-Return',
        color: 'primary'
    },
    {
        icon: 'arrowright',
        values: '2147 / 782.81',
        title: 'Issue',
        color: 'secondary'
    },
    {
        icon: 'rate',
        values: '0 / 0',
        title: 'Issue Return',
        color: 'warning'
    },
    {
        icon: 'new-order',
        values: '2377 / 808.31',
        title: 'Closing Stock',
        color: 'success'
    },
];

}
