import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() id: string = 'typeahead-basic';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Enter text';
  @Input() classList: string = '';
  @Input() control: FormControl|any;
  @Input() required: boolean = false;
  @Input() DataProvider: any;
  // @Input() ShortcutKeysStartSequence: string = '';
  @Input() config: any;

  get inputValue(): string {
    return this.control ? this.control.value : '';
  }
}
