import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLabelPageComponent } from './add-edit-label-page.component';

describe('AddEditLabelPageComponent', () => {
  let component: AddEditLabelPageComponent;
  let fixture: ComponentFixture<AddEditLabelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditLabelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLabelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
