import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

interface TableColumn {
  header: string;
  field: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, NgbPaginationModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  page = 1;
  pageSize = 10;
  collectionSize = this.data.length;
  pagedData: any[] = [];

  pageSizes: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['columns']) {
      this.collectionSize = this.data.length;
      this.updatePageSizes();
      this.refreshData();
    }
  }

  updatePageSizes(): void {
    let availableSizes: number[] = [5];
    let maxSize = this.collectionSize;

    while (availableSizes[availableSizes.length - 1] < maxSize) {
      let nextSize = availableSizes[availableSizes.length - 1] * 2;
      if (nextSize > maxSize) {
        availableSizes.push(maxSize);
      } else {
        availableSizes.push(nextSize);
      }
    }

    this.pageSizes = availableSizes;
  }

  refreshData(): void {
    this.pagedData = this.data.slice(
      (this.page - 1) * this.pageSize,
      this.page * this.pageSize
    );
  }

  onPageChange(): void {
    this.refreshData();
  }
}
