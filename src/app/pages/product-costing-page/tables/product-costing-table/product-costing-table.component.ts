import { Component } from '@angular/core';
// import { TableComponent } from '../../../../components/common_components/table/table.component';
import { Router } from '@angular/router';
import { TestComponent } from '../../../test/test.component';

@Component({
  selector: 'app-product-costing-table',
  imports: [
    // TableComponent ,
     TestComponent],
  templateUrl: './product-costing-table.component.html',
  styleUrl: './product-costing-table.component.scss'
})
export class ProductCostingTableComponent {

  constructor(private router: Router){
    
  }

 
  navigateTo(route: string) {
    this.router.navigate([route]); 
  }
  columns = [
    { name: 'Operations', subColumns: [] },
    { name: 'Sequence of Operation', subColumns: [] },
    { name: 'Machine', subColumns: [] },
    { name: 'Cycle Time', subColumns: ['Sec'] },
    { name: 'Output/Hour', subColumns: [] },
    { name: 'Direct M/C Hour Rate', subColumns: [] },
    { name: 'Cost / Product', subColumns: [] },
    { name: 'I - Inhouse | S - Subcontract', subColumns: [] },
    { name: 'RM Cost', subColumns: [] },
    { name: 'Subcontract Cost', subColumns: [] },
    { name: 'Unit Cost', subColumns: ['Power', 'Labour', 'Consumables', 'Depreciation', 'Overhead'] },
    { name: 'Total Direct Cost', subColumns: [] },
  ];

  // Fully dynamic table data
  data = [
    {
      Operations: 1,
      'Sequence of Operation': 'Shank Manufacturing',
      Machine: 'NA',
      'Cycle Time': { Sec: 0 },
      'Output/Hour': 0,
      'Direct M/C Hour Rate': 1.0,
      'Cost / Product': 250.0,
      'I - Inhouse | S - Subcontract': 'S',
      'RM Cost': 250.0,
      'Subcontract Cost': 0.0,
      'Unit Cost': {
        Power: 0.0,
        Labour: 0.0,
        Consumables: 0.0,
        Depreciation: 0.0,
        Overhead: 0.0,
      },
      'Total Direct Cost': 0.0,
    },
    {
      Operations: 2,
      'Sequence of Operation': 'Shank Pocketing',
      Machine: 'Wirecut EDM',
      'Cycle Time': { Sec: 600 },
      'Output/Hour': 2.0,
      'Direct M/C Hour Rate': 2.0,
      'Cost / Product': 30.0,
      'I - Inhouse | S - Subcontract': 'S',
      'RM Cost': 0.0,
      'Subcontract Cost': 30.0,
      'Unit Cost': {
        Power: 9.15,
        Labour: 0.0,
        Consumables: '#REF!',
        Depreciation: '#ERROR!',
        Overhead: '#ERROR!',
      },
      'Total Direct Cost': '#ERROR!',
    },
    // Add more rows as needed
  ];
}
