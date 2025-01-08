import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rounded-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,CommonModule],
  templateUrl: './rounded-button.component.html',
  styleUrl: './rounded-button.component.scss'
})
export class RoundedButtonComponent {
  @Input() icon: string = 'add'; // Default icon
  @Input() backgroundColor: string = '#0d6efd'; // Default background color
  @Input() iconColor: string = '#ffffff'; // Default icon color
  @Input() size: string = '38px'; // Default size (height and width)
  @Input() iconSize: string = '24px'; // Default icon size

  @Output() buttonClick = new EventEmitter<void>(); // Event emitter for click events

  onClick() {
    this.buttonClick.emit();
  }

  get buttonStyles() {
    return {
      'background-color': this.backgroundColor,
      width: this.size,
      height: this.size,
      'border-radius': '50%',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
    };
  }

  get iconStyles() {
    return {
      color: this.iconColor,
      'font-size': this.iconSize,
    };

  }
}

