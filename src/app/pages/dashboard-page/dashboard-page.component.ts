import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../components/common_components/input/input.component';
import { LabelComponent } from '../../components/common_components/label/label.component';
import { SelectComponent } from '../../components/common_components/select/select.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/common_components/table/table.component';
import { ButtonComponent } from '../../components/common_components/button/button.component';
import { RouterOutlet } from '@angular/router';
import { SideNavBarComponent } from '../../components/dashboard_components/side-nav-bar/side-nav-bar.component';
import { TopMenuBarComponent } from '../../components/dashboard_components/top-menu-bar/top-menu-bar.component';
import { StateManagementService } from '../../services/state-management.service';
// import { SideNavBarComponent } from '../../components/dashboard_components/side-nav-bar/side-nav-bar.component';
// import { TopMenuBarComponent } from '../../components/dashboard_components/top-menu-bar/top-menu-bar.component';
// import { SideNavBarComponent } from '../../components/dashboard_components/side-nav-bar/side-nav-bar.component';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    // InputComponent,
    // LabelComponent,
    // SelectComponent,
    // ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    // TableComponent,
    // ButtonComponent,
    TopMenuBarComponent,
    SideNavBarComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  buttons = [
    { label: 'Save', type: 'primary' },
    { label: 'Cancel', type: 'secondary' },
    { label: 'Delete', type: 'danger' }
  ];
  __buttonConfig = { label: 'Save', type: 'danger' }


  form!: FormGroup;
  __labelDataProvider = ['first name', 'last name'];
  placeholder: string = 'Enter species name';
  placeholder2: string = 'Enter Last name';

  animalOptions = [
    { id: 1, value: 'lion', label: 'Lion' },
    { id: 2, value: 'tiger', label: 'Tiger' },
    { id: 3, value: 'elephant', label: 'Elephant' },
    { id: 4, value: 'giraffe', label: 'Giraffe' },
  ];

  initialData = {
    speciesName: 'Lion',
    lastName: 'Smith',
    animalType: 'tiger',
  };

  columns = [
    { header: 'FullName', field: 'fullname' },
    { header: 'Flag', field: 'flag' },
    { header: 'Area', field: 'area' },
    { header: 'Population', field: 'population' }
  ];

  dataSource = [
    { id: 1, fullname: 'Russia', flag: 'f/f3/Flag_of_Russia.svg', area: 17075200, population: 146989754 },
    { id: 2, fullname: 'France', flag: 'c/c3/Flag_of_France.svg', area: 640679, population: 64979548 },
    { id: 3, fullname: 'Germany', flag: 'b/ba/Flag_of_Germany.svg', area: 357114, population: 82114224 },
    { id: 4, fullname: 'Portugal', flag: '5/5c/Flag_of_Portugal.svg', area: 92090, population: 10329506 },
    { id: 5, fullname: 'Canada', flag: 'c/cf/Flag_of_Canada.svg', area: 9976140, population: 36624199 },
    { id: 6, fullname: 'Vietnam', flag: '2/21/Flag_of_Vietnam.svg', area: 331212, population: 95540800 },
    { id: 7, fullname: 'Brazil', flag: '0/05/Flag_of_Brazil.svg', area: 8515767, population: 209288278 },
    { id: 8, fullname: 'Mexico', flag: 'f/fc/Flag_of_Mexico.svg', area: 1964375, population: 129163276 },
    { id: 9, fullname: 'United States', flag: 'a/a4/Flag_of_the_United_States.svg', area: 9629091, population: 324459463 },
    { id: 10, fullname: 'India', flag: '4/41/Flag_of_India.svg', area: 3287263, population: 1324171354 }
  ];

  sideBarStatus: () => boolean;

  constructor(private stateManagementServiceRef: StateManagementService) {
    this.sideBarStatus = this.stateManagementServiceRef.sideBarStatus();
  }


  ngOnInit() {
    this.form = new FormGroup({
      speciesName: new FormControl(this.initialData.speciesName, [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl(this.initialData.lastName, [Validators.required]),
      animalType: new FormControl(this.initialData.animalType, [Validators.required]),
    });
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Value:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onButtonClick(data: any) {

  }
}
