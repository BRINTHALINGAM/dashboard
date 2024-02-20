import { Component } from "@angular/core";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SalesPurchaseComponent } from './sales-purchase/sales-purchase.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { SalesSummary1Component } from './sales-summary1/sales-summary1.component';
import { RmreceiptComponent } from './rmreceipt/rmreceipt.component';
import { MixwiseComponent } from './mixwise/mixwise.component';
import { TopsuppliersComponent } from './topsuppliers/topsuppliers.component';
import { ValuesComponent } from './values/values.component';
import { ConsumptionComponent } from './consumption/consumption.component';

@Component({
  selector: "app-dashboard-rmi",
  templateUrl: "./rmi-dashboard.component.html",
  styleUrls: ["./rmi-dashboard.component.scss"],
})
export class RMIDashboardComponent {
  items = [
    { component: SalesPurchaseComponent, name: 'Sales Purchase' },
    { component: SalesSummaryComponent, name: 'Stock Chart', size: 'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: SalesSummary1Component, name: 'Pending Order', size: 'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: RmreceiptComponent, name: 'RM Receipt', size: 'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: MixwiseComponent, name: 'Mixwise Consumption', size: 'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: TopsuppliersComponent, name: 'Top 10 Suppliers', size: 'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: ValuesComponent, name: 'Value in Lakhs', size: 'col-xl-6 col-lg-6 col-sm-12 box-col-4' },
    { component: ConsumptionComponent, name: 'Avg. Consumption Bales/Day', size: 'col-xl-6 col-lg-6 col-sm-12 box-col-4' }
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
