import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  @Input() columns: any[] = []; // Column definitions
  @Input() data: any[] = []; // Data for rows

  // Method to check if any column has sub-columns
  hasSubColumns(): boolean {
    return this.columns.some((col) => col.subColumns && col.subColumns.length > 0);
  }

  // Method to safely access nested sub-column data
  getSubColumnValue(row: any, columnName: string, subColumnName: string): any {
    return row[columnName]?.[subColumnName] || '';
  }
}
