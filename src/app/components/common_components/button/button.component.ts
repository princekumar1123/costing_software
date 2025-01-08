import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';  // Button label
  @Input() buttonType: string = 'primary'; // Button type (e.g., primary, secondary, danger)
  
  @Output() buttonClicked = new EventEmitter<void>();  // Event to notify the parent when the button is clicked

  onClick(): void {
    this.buttonClicked.emit();
  }
}
