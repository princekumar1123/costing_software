import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../components/common_components/input/input.component';
import { SelectComponent } from '../../../../components/common_components/select/select.component';
import { AddEditLabelValuePageComponent } from '../add-edit-label-value-page/add-edit-label-value-page.component';
// import { ButtonComponent } from '../../../../components/common_components/button/button.component';

@Component({
  selector: 'app-add-edit-label-page',
  standalone: true,
  templateUrl: './add-edit-label-page.component.html',
  styleUrls: ['./add-edit-label-page.component.scss'],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    // ButtonComponent
  ]
})
export class AddEditLabelPageComponent {
  labelForm: FormGroup;

  optionsDataSource: any[] = [
    { id: 1, value: 'String', label: 'string' },
    { id: 2, value: 'Number', label: 'number' }
  ];

  __buttonConfig = { label: 'Add', type: 'success' };




  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditLabelPageComponent>,
    private dialog: MatDialog
  ) {
    this.labelForm = this.fb.group({
      fields: this.fb.array([])
    });

    this.addField();
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  get fields(): FormArray|any {
    return this.labelForm.get('fields') as FormArray;
  }

  addField() {
    const fieldGroup = this.fb.group({
      labelName: ['', Validators.required],
      valueType1: ['', Validators.required]
    });
    this.fields.push(fieldGroup);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  submitForm() {
    if (this.labelForm.valid) {
      console.log('Form Data:', this.labelForm.value);
      this.dialogRef.close(this.labelForm.value);
      const dialogRef = this.dialog.open(AddEditLabelValuePageComponent);
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          console.log('Label saved:', result);
        } else {
          console.log('Dialog was closed without saving.');
        }
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}