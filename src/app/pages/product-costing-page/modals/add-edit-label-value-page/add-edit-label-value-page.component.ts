import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from '../../../../components/common_components/input/input.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddEditLabelPageComponent } from '../add-edit-label-page/add-edit-label-page.component';

@Component({
  selector: 'app-add-edit-label-value-page',
  standalone: true,
  templateUrl: './add-edit-label-value-page.component.html',
  styleUrls: ['./add-edit-label-value-page.component.scss'],
  imports: [CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    InputComponent,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

  ],
})
export class AddEditLabelValuePageComponent {
  // fields: Array<{ labelName: string; [key: string]: string }> = [
  // fields: any[]= [

  //   { labelName: 'ProductID', valueType1: 'Number' },
  //   { labelName: 'ProductName', valueType1: 'Number', valueType2: 'String' ,valueType3: 'String',valueType4: 'Number' },
  // ];
  fields: any[] = [
    { labelName: 'ProductID', valueType1: 'Number' },
    { labelName: 'ProductName', valueType1: 'Number', valueType2: 'String', valueType3: 'String', valueType4: 'Number' },
    { labelName: 'CategoryID', valueType1: 'Number' },
    { labelName: 'CategoryName', valueType1: 'String' },
    { labelName: 'SupplierID', valueType1: 'Number' },
    { labelName: 'SupplierName', valueType1: 'String', valueType2: 'Number' },
    { labelName: 'Price', valueType1: 'Number' },
    { labelName: 'StockQuantity', valueType1: 'Number' },
    { labelName: 'Discount', valueType1: 'Number', valueType2: 'String' },
    { labelName: 'WarrantyPeriod', valueType1: 'Number' },
    { labelName: 'LaunchDate', valueType1: 'Date' },
    { labelName: 'Manufacturer', valueType1: 'String', valueType2: 'String' },
    { labelName: 'ProductDescription', valueType1: 'String' },
  ];

  labelValueForm!: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddEditLabelValuePageComponent>
  ) {
    this.labelValueForm = this.fb.group({
      fields: this.fb.array(this.fields.map((field) => this.createFieldGroup(field))),
    });
  }

  get fieldsFormArray(): FormArray {
    return this.labelValueForm.get('fields') as FormArray;
  }

  createFieldGroup(field: { labelName: string;[key: string]: string }): FormGroup {
    const group: { [key: string]: FormControl } = {
      labelName: new FormControl(field.labelName),
    };

    Object.keys(field)
      .filter((key) => key.startsWith('valueType'))
      .forEach((key) => {
        group[key] = new FormControl('');
      });

    return this.fb.group(group);
  }

  getFieldKeys(index: number): string[] {
    return Object.keys(this.fields[index]).filter((key) => key.startsWith('valueType'));
  }

  onSubmit() {
    console.log('Form Data:', this.labelValueForm.value);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
