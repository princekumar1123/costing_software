import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCostingTableComponent } from './product-costing-table.component';

describe('ProductCostingTableComponent', () => {
  let component: ProductCostingTableComponent;
  let fixture: ComponentFixture<ProductCostingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCostingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCostingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
