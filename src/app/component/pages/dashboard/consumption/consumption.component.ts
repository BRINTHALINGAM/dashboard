import { Component } from '@angular/core';
import { customer } from '../../../../shared/data/component/deshboard/crm-dashboard';
  import * as customerChats from '../../../../shared/data/component/deshboard/crm-dashboard-charts';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrl: './consumption.component.scss'
})
export class ConsumptionComponent {
 
  
  
  
   public CustomerData = customer;
    public CustomerChatData = customerChats.customerChat;;


    
}
