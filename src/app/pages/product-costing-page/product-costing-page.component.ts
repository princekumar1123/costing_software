import { Component } from '@angular/core';
import { TableComponent } from '../../components/common_components/table/table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEditLabelPageComponent } from './modals/add-edit-label-page/add-edit-label-page.component';
import { RoundedButtonComponent } from '../../components/common_components/rounded-button/rounded-button.component';


@Component({
  selector: 'app-product-costing-page',
  standalone: true,
  imports: [
    TableComponent,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RoundedButtonComponent
  ],
  templateUrl: './product-costing-page.component.html',
  styleUrl: './product-costing-page.component.scss'
})
export class ProductCostingPageComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(data?:string) {
    const dialogRef = this.dialog.open(AddEditLabelPageComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Label saved:', result);
      } else {
        console.log('Dialog was closed without saving.');
      }
    });
  }

  __tablesHeaders: string[] = [
    'PRODUCT COSTING SHEET',
    'PRODUCT DETAILS',
    'RAW MATERIAL DETAILS & COST',
    'CONVERSION COST DETAILS',
    'Unit Cost',
    'Machine Hour Rate'
  ]

  columns = [
    { header: 'FullName', field: 'fullname' },
    { header: 'Flag', field: 'flag' },
    { header: 'Area', field: 'area' },
    { header: 'Population', field: 'population' }
  ];
  dataSource = [
    { id: 1, fullname: 'Russia', flag: 'f/f3/Flag_of_Russia.svg', area: 17075200, population: 146989754 },
    // { id: 2, fullname: 'France', flag: 'c/c3/Flag_of_France.svg', area: 640679, population: 64979548 },
    // { id: 3, fullname: 'Germany', flag: 'b/ba/Flag_of_Germany.svg', area: 357114, population: 82114224 },
    // { id: 4, fullname: 'Portugal', flag: '5/5c/Flag_of_Portugal.svg', area: 92090, population: 10329506 },
    // { id: 5, fullname: 'Canada', flag: 'c/cf/Flag_of_Canada.svg', area: 9976140, population: 36624199 },
    // { id: 6, fullname: 'Vietnam', flag: '2/21/Flag_of_Vietnam.svg', area: 331212, population: 95540800 },
    // { id: 7, fullname: 'Brazil', flag: '0/05/Flag_of_Brazil.svg', area: 8515767, population: 209288278 },
    // { id: 8, fullname: 'Mexico', flag: 'f/fc/Flag_of_Mexico.svg', area: 1964375, population: 129163276 },
    // { id: 9, fullname: 'United States', flag: 'a/a4/Flag_of_the_United_States.svg', area: 9629091, population: 324459463 },
    // { id: 10, fullname: 'India', flag: '4/41/Flag_of_India.svg', area: 3287263, population: 1324171354 }
  ];
}
