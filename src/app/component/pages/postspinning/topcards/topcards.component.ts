import { icon } from './../../../../shared/data/component/icons/flags';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topcards',
  templateUrl: './topcards.component.html',
  styleUrl: './topcards.component.scss'
})
export class TopcardsComponent {
  public commonData = [
    {
      symbol: 'icofont icofont-industries-alt-4',
      style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(246, 60, 60);',
      num:'19/8',
      title: 'No of Machines/ No of Counts',
      color: 'secondary'
  },
 
  {
    symbol:'icon-package',
    // icon: 'new-order',
    style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(80, 202, 196);',
    num:'17.41/90.41', 
    title: 'On date Prodn./ UTD Prodn',
    color: 'primary'
},
 {
  symbol:'icofont icofont-vehicle-delivery-van',
  // icon: 'return-box',
  style: 'font-size: 24px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
  num: '0/0',
  title: 'On Date Otherdepts prodn/ UTD Otherdept prodn',
  color: 'warning'
}, 
{
  symbol: 'icofont icofont-recycle-alt', 
  style: 'font-size: 24px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(80, 202, 196);',
  // icon:'course-1', 
  num:'1.5/1.6',
 title: 'On Date Waste% / UTD Waste%',
   color: 'success'
},
 {
  symbol:'fa fa-file-text-o',
  style: 'font-size: 24px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(246, 60, 60);',
  // icon: 'rate',
  num: '43.3/42.1',
  title: 'UTD RG1 Prodn /UTD Packed Prodn',
  color: 'secondary'
},
 {
 icon:'sale',
  num: '30.9/32.1',
  title: 'On Date Avg Count/UTD Avg Count',
  color: 'primary'
},
{
   symbol: 'icon-dashboard',
   style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
  num: '77.7/77.6',
  title: 'On date Util./UTD all Util.',
  color: 'warning'
},
]
}
