import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, MatListModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'probsolve';
  isSidebarCollapsed = false;
  isCollapsed = false;
  menuActive = false;  // Initialize menuActive to false
  
  menuItems = [
    { name: 'Problem-Solving Kids and Company', url: '' },
    { name: 'Problem Solving', url: './les2' },
    { name: 'Link 3', url: '#' },
  ];

  // Function to toggle menu visibility
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    console.log('Sidebar collapsed:', this.isCollapsed);
  }

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
    console.log('Toggling submenu for:', item.name, 'Expanded:', item.expanded);
  }
}
