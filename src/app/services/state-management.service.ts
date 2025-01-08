import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  constructor() { }

  private __sideBarStatus = signal<boolean>(false);

  // Return the signal value directly (no subscribe needed)
  sideBarStatus():any {
    return this.__sideBarStatus;
  }

  // Set the sidebar status via signal
  setSidebarStatus(status: boolean) {
    this.__sideBarStatus.set(status); // Update the signal value
  }
}
