import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from '../../../services/state-management.service';

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss'
})
export class SideNavBarComponent {
  isCollapsed = false;
  activeItem = 'home';

  constructor(private stateManagementServiceRef:StateManagementService,private router: Router){

  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.stateManagementServiceRef.setSidebarStatus(this.isCollapsed)
  }

  // setActiveItem(item: string): void {
  //   this.activeItem = item;
  // }

  navigateTo(route: string, item: string) {
    this.activeItem = item; 
    this.router.navigate([route]); 
  }
}