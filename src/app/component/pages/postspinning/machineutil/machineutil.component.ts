import { Component } from '@angular/core';

@Component({
  selector: 'app-machineutil',
  templateUrl: './machineutil.component.html',
  styleUrl: './machineutil.component.scss'
})
export class MachineutilComponent {
  
 primary_color = localStorage.getItem('primary_color') || '#35bfbf';
 secondary_color = localStorage.getItem('secondary_color') || '#FF6150';
  chart7: any = {
    type: 'Bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
        series: [
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]
        ]
    },
    options: {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function (value: any) {
                return (value / 1000) + 'k';
            }
        },
        height: 250,
        colors: [this.primary_color, this.secondary_color]
    }
};
}
