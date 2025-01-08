import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLabelValuePageComponent } from './add-edit-label-value-page.component';

describe('AddEditLabelValuePageComponent', () => {
  let component: AddEditLabelValuePageComponent;
  let fixture: ComponentFixture<AddEditLabelValuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditLabelValuePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLabelValuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
