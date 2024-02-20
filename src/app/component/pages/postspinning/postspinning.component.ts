import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TopcardsComponent } from './topcards/topcards.component';
import { MachineutilComponent } from './machineutil/machineutil.component';
import { CounteffComponent } from './counteff/counteff.component';
import { CountprodnComponent } from './countprodn/countprodn.component';
import { MachineprodnComponent } from './machineprodn/machineprodn.component';
import { Rg1Component } from './rg1/rg1.component';
import { VarietyprodnComponent } from './varietyprodn/varietyprodn.component';

@Component({
  selector: 'app-postspinning',
  templateUrl: './postspinning.component.html',
  styleUrls :['./postspinning.component.scss']
})
export class PostspinningComponent implements OnInit {
  items = [
    { component: TopcardsComponent, name: 'Top Cards'},
    { component: Rg1Component, name: 'RG1 Stocks', size:'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: VarietyprodnComponent, name: 'Variety Production', size:'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: CountprodnComponent, name: 'Count Wise Production', size:'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: CounteffComponent, name: 'Count Wise Efficiency %', size:'col-xl-6 col-lg-6 col-sm-12 box-col-4'},
    { component: MachineprodnComponent, name: 'Autoconer Machine Wise Production', size:'col-xl-12 col-lg-12 col-sm-12 box-col-4' },
    { component: MachineutilComponent, name: 'Machine Wise Utilisation %', size:'col-xl-12 col-lg-12 col-sm-12 box-col-4' }
  ];

  currentIndexs: number[];

  ngOnInit(): void {
    this.loadItemsOrder();
    this.reorderItems();
  }

  loadItemsOrder(): void {
    const storedOrder = localStorage.getItem('currentIndexs');
    if (storedOrder) {
      this.currentIndexs = JSON.parse(storedOrder);
    } else {
      // If currentIndexs not found in localStorage, initialize with default order
      this.currentIndexs = this.items.map((_, index) => index);
      localStorage.setItem('currentIndexs', JSON.stringify(this.currentIndexs));
    }
  }

  reorderItems(): void {
    const reorderedItems = this.currentIndexs.map(index => this.items[index]);
    this.items = reorderedItems;
  }

  drop(event: CdkDragDrop<any[]>): void {
    const currentIndexItem = this.currentIndexs[event.currentIndex];
    const prevIndexItem = this.currentIndexs[event.previousIndex];
    this.currentIndexs[event.currentIndex] = prevIndexItem;
    this.currentIndexs[event.previousIndex] = currentIndexItem;
    localStorage.setItem('currentIndexs', JSON.stringify(this.currentIndexs));

    const movedItem = this.items[event.previousIndex];
    this.items.splice(event.previousIndex, 1);
    this.items.splice(event.currentIndex, 0, movedItem);
  }

  getGridClasses(size: string | undefined): string {
    return size || '';
  }
}
