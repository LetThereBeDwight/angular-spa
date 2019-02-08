import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-spa';
}

@Component({
  templateUrl: './templates/home.component.html',
  styleUrls: ['./app.component.scss']
})
export class HomeComponent {
    title = 'Home';
}


@Component({
  templateUrl: './templates/resume.component.html',
  styleUrls: ['./app.component.scss']
})
export class ResumeComponent {
    title = 'Resume';
}

@Component({
  templateUrl: './templates/resume.component.html',
  styleUrls: ['./app.component.scss']
})
export class CodeComponent {
    title = 'Code';
}

@Component({
  templateUrl: './templates/resume.component.html',
  styleUrls: ['./app.component.scss']
})
export class FunComponent {
    title = 'Fun';
}
