import { Component } from '@angular/core';
// import {
// stuff
// } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-spa';
}

@Component({
  templateUrl: './templates/home.component.html',
  animations: [],
})
export class HomeComponent {
    title = 'Home';
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './templates/toolbar.component.html',
})
export class ToolBarComponent {}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class ResumeComponent {
    title = 'Resume';
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class CodeComponent {
    title = 'Code';
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class FunComponent {
    title = 'Fun';
}
