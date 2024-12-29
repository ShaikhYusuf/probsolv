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
  isMenuActive = false;  // Initialize menu visibility
  menuItems = [
    { name: 'Problem-Solving Kids and Company', url: '' },
    { name: 'Problem Solving', url: './les2' },
    { name: 'Problem-Solving Toolbox: Logic Tree', url: 'les3' },
    { name: 'SAVE THE MUSHROOM LOVERS!', url: 'les4' },
    { name: 'Diagnosis of the Situation', url: 'les5' },
    { name: 'Developing a Hypothesis', url: 'les6' },
    { name: 'Determining the Analyses and Information Required', url: 'les7' },
    { name: 'Problem-Solving Toolbox: The Design Plan', url: 'les8' },
    { name: 'Steps to Developing a Wide Variety of Solutions', url: 'les9' },
    { name: 'Prioritize the Actions', url: 'les10' },
    { name: 'Develop an Implementation Plan', url: 'les11' },
    { name: 'The Outcome of the Mushroom Lovers’ Concert', url: 'les12' },
    { name: 'Fishy Goals and Solid Achievements', url: 'les13' },
    { name: 'John’s Big Dream and His First Goal: A Clear Path Forward', url: 'les14' },
    { name: 'Step 2: Determining the Gap Between the Goal and Current Situation', url: 'les15' },
    { name: 'Lesson 16: Generating Options and Ideas to Close the Gap', url: 'les16' },
    { name: 'Lesson 17: Selecting the Best Ideas and Formulating a Hypothesis', url: 'les17' },
    { name: 'Lesson 18: Problem-Solving Toolbox: Hypothesis Pyramid', url: 'les18' },
    { name: 'Lesson 19: 4A. Determining the Analyses and Information Required to Test the Hypothesis', url: 'les19' },
    { name: 'Lesson 20: 4B. Analyze and Develop Action Plan', url: 'les20' },
  ];

  // Function to toggle menu visibility
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  // Close menu on selecting a menu item
  selectMenuItem() {
    this.isMenuActive = false;
  }

  // Listen for the Escape key to close the menu
  // @HostListener('document:keydown.escape', ['$event'])
  // onEscapeKey(event: KeyboardEvent) {
  //   this.isMenuActive = false;
  // }
}
