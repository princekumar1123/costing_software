// import { ChangeDetectorRef, Component, Inject } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
// import { InputComponent } from '../../../../components/common_components/input/input.component';
// import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { AddEditLabelPageComponent } from '../add-edit-label-page/add-edit-label-page.component';

// @Component({
//   selector: 'app-add-edit-label-value-page',
//   standalone: true,
//   templateUrl: './add-edit-label-value-page.component.html',
//   styleUrls: ['./add-edit-label-value-page.component.scss'],
//   imports: [CommonModule,
//     ReactiveFormsModule,
//     MatButtonModule,
//     InputComponent,
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,

//   ],
// })
// export class AddEditLabelValuePageComponent {
//   // fields: Array<{ labelName: string; [key: string]: string }> = [
//   // fields: any[]= [

//   //   { labelName: 'ProductID', valueType1: 'Number' },
//   //   { labelName: 'ProductName', valueType1: 'Number', valueType2: 'String' ,valueType3: 'String',valueType4: 'Number' },
//   // ];
//   __fields: any[] = [
//     { labelName: 'ProductID', valueType1: 'Number' },
//     // { labelName: 'ProductName', valueType1: 'Number', valueType2: 'String', valueType3: 'String', valueType4: 'Number' },
//     // { labelName: 'CategoryID', valueType1: 'Number' },
//     // { labelName: 'CategoryName', valueType1: 'String' },
//     // { labelName: 'SupplierID', valueType1: 'Number' },
//     // { labelName: 'SupplierName', valueType1: 'String', valueType2: 'Number' },
//     // { labelName: 'Price', valueType1: 'Number' },
//     // { labelName: 'StockQuantity', valueType1: 'Number' },
//     // { labelName: 'Discount', valueType1: 'Number', valueType2: 'String' },
//     // { labelName: 'WarrantyPeriod', valueType1: 'Number' },
//     // { labelName: 'LaunchDate', valueType1: 'Date' },
//     // { labelName: 'Manufacturer', valueType1: 'String', valueType2: 'String' },
//     // { labelName: 'ProductDescription', valueType1: 'String' },
//   ];

//   labelValueForm!: FormGroup;

//   constructor(private fb: FormBuilder,
//     private dialogRef: MatDialogRef<AddEditLabelValuePageComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private cd: ChangeDetectorRef) {

//     // this.__fields = this.data.mainFields

//     this.labelValueForm = this.fb.group({
//       mainFieldValues: this.fb.array(this.__fields.map((field) => this.createFieldGroup(field))),
//     });
//   }


//   ngAfterViewInit() {
//     this.cd.detectChanges();
//   }

//   get fieldsFormArray(): FormArray {
//     return this.labelValueForm.get('mainFieldValues') as FormArray;
//   }

//   createFieldGroup(field: { labelName: string;[key: string]: string }): FormGroup {
//     const group: { [key: string]: FormControl } = {
//       labelName: new FormControl(field.labelName),
//     };

//     Object.keys(field)
//       .filter((key) => key.startsWith('valueType'))
//       .forEach((key) => {
//         group[key] = new FormControl('');
//       });

//     return this.fb.group(group);
//   }

//   getFieldKeys(index: number): string[] {
//     return Object.keys(this.__fields[index]).filter((key) => key.startsWith('valueType'));
//   }

//   onSubmit() {
//     console.log('Form Data:', this.labelValueForm.value);


//   }

//   onCancel() {
//     this.dialogRef.close();
//   }
// }



import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from '../../../../components/common_components/input/input.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-add-edit-label-value-page',
  standalone: true,
  templateUrl: './add-edit-label-value-page.component.html',
  styleUrls: ['./add-edit-label-value-page.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    InputComponent,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AddEditLabelValuePageComponent implements OnInit {
  __fields: any[] = [
    { labelName: 'ProductID', valueType1: 'Number' },
    // Add more fields as needed
  ];

  labelValueForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditLabelValuePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cd: ChangeDetectorRef,
    private apiServiceref:ApiService
  ) {
    // Initialize form with data or default fields
    // this.__fields = this.data.mainFields || this.__fields;

    this.labelValueForm = this.fb.group({
      mainFieldValues: this.fb.array(this.__fields.map((field) => this.createFieldGroup(field))),
    });
  }

  ngOnInit() {
    // If fields are passed via data, initialize them
    if (this.data && this.data.mainFields) {
      this.__fields = this.data.mainFields;
      this.labelValueForm.setControl(
        'mainFieldValues',
        this.fb.array(this.__fields.map((field) => this.createFieldGroup(field)))
      );
    }
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  // Getter for the FormArray
  get fieldsFormArray(): FormArray {
    return this.labelValueForm.get('mainFieldValues') as FormArray;
  }

  // Create a FormGroup for each field
  createFieldGroup(field: { labelName: string;[key: string]: string }): FormGroup {
    const group: { [key: string]: FormControl } = {
      labelName: new FormControl(field.labelName, Validators.required),
      value: new FormControl('', Validators.required), // Single value control
    };

    // If you need to handle multiple value types, uncomment the following:
    /*
    Object.keys(field)
      .filter((key) => key.startsWith('valueType'))
      .forEach((key) => {
        group[key] = new FormControl('', Validators.required);
      });
    */

    return this.fb.group(group);
  }

  // If handling multiple value types, adjust this method accordingly
  /*
  getFieldKeys(index: number): string[] {
    return Object.keys(this.__fields[index]).filter((key) => key.startsWith('valueType'));
  }
  */

  // Handle form submission
  onSubmit() {
    if (this.labelValueForm.invalid) {
      // Optionally, mark all controls as touched to trigger validation messages
      this.labelValueForm.markAllAsTouched();
      return;
    }

    const formValue = this.labelValueForm.value;

    // Transform the form data to the desired structure
    const transformedData = {
      mainFieldValues: formValue.mainFieldValues.map((field: any) => ({
        labelName: field.labelName,
        value: this.parseValue(field.value),
      })),
    };

    this.apiServiceref.post_api_service(`values/add/products/label-values/${this.data._id}`,transformedData).subscribe((res:any)=>{
      console.log("final result",res)

      if(res){
        this.dialogRef.close(res.values);
      }

    })
    console.log('Transformed Data:', transformedData);

    

    // TODO: Handle the transformed data (e.g., send it to a server)

    // Optionally, close the dialog and pass the data back

  }

  // Utility method to parse the value based on its type
  parseValue(value: any): any {
    // Implement parsing logic based on your requirements
    // For example, convert numeric strings to numbers
    if (!isNaN(value)) {
      return Number(value);
    }
    return value;
  }

  // Handle form cancellation
  onCancel() {
    this.dialogRef.close();
  }
}
