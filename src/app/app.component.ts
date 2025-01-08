import { Component } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SideNavBarComponent } from './components/dashboard_components/side-nav-bar/side-nav-bar.component';
import { TopMenuBarComponent } from './components/dashboard_components/top-menu-bar/top-menu-bar.component';
import { RouterOutlet } from '@angular/router';
// import { InputComponent } from './components/common_components/input/input.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [DashboardPageComponent],
  imports: [RouterOutlet, 
    // TopMenuBarComponent, SideNavBarComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'costing_software';
  // inputValue: string = '';

}
