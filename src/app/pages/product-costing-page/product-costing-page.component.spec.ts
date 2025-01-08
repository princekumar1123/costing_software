import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCostingPageComponent } from './product-costing-page.component';

describe('ProductCostingPageComponent', () => {
  let component: ProductCostingPageComponent;
  let fixture: ComponentFixture<ProductCostingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCostingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCostingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
