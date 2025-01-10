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
import { ApiService } from '../../../../services/api.service';
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
    { id: 1, value: 'string', label: 'string' },
    { id: 2, value: 'number', label: 'number' }
  ];

  __buttonConfig = { label: 'Add', type: 'success' };

  __label_response:any=''



  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditLabelPageComponent>,
    private dialog: MatDialog,
    private apiServiceRef: ApiService
  ) {
    this.labelForm = this.fb.group({
      mainFields: this.fb.array([])
    });

    this.addField();
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  get mainFields(): FormArray | any {
    return this.labelForm.get('mainFields') as FormArray;
  }

  addField() {
    const fieldGroup = this.fb.group({
      labelName: ['', Validators.required],
      valueType1: ['', Validators.required]
    });
    this.mainFields.push(fieldGroup);
  }

  removeField(index: number) {
    this.mainFields.removeAt(index);
  }

  submitForm() {
    if (this.labelForm.valid) {
      console.log('Form Data:', this.labelForm.value);

      this.apiServiceRef.post_api_service('labels/add/products/label-names', this.labelForm.value).subscribe((res:any) => {
        console.log("result", res);
        this.__label_response= res.skeleton

 
      this.dialogRef.close({data:this.__label_response});
      console.log();
      
      if(this.__label_response){
        console.log("gg");
        
      // const dialogRef = this.dialog.open(AddEditLabelValuePageComponent,{data:this.__label_response});
      // dialogRef.afterClosed().subscribe((result: any) => {
      //   if (result) {
      //     console.log('Label saved:', result);
      //   } else {
      //     console.log('Dialog was closed without saving.');
      //   }
      // });
      }
    })
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}