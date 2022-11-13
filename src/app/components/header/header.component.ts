import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular-Task-App';

  // at the beginning the default value of boolean in TypeScript is false
  showTaskForm!: boolean;
  subscription!: Subscription;

  // (step 4, do the same thing in task-form component to toggle whether the form is shown or not) 
  // subscribe uiService.onTggole() to recieve the showTaskForm in uiService to set the showTaskForm in this component
  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onTggole().subscribe((value) => {this.showTaskForm = value});
  }

  ngOnInit(): void {}

  // (step 1) when we click the Add button we call the uiService.toggleTaskForm() to toggle showTaskForm 
  toggleTaskForm() {
    this.uiService.toggleTaskForm();
  }

  // check if the router.url is equal to the route string we send in
  isRoute(route: string) {
    let isRoute: boolean = (this.router.url === route);
    return isRoute;
  }
}

// cna use  this.router.navigate(['/', 'about']) 
// or this.router.navigateByUrl('/about') to navigate to About component