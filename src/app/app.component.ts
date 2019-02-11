import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: '<div [@animRoutes]="getPage(appOutlet)"><router-outlet #appOutlet="outlet"></router-outlet></div>',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(9rem) rotate(-10deg)'
              }),
              animate(
                '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
                style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('0.35s', style({ opacity: 0 })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {
    title = 'angular-spa';

    getPage(outlet) {
      return outlet.activatedRouteData.page || 'one';
    }
}

@Component({
  templateUrl: './templates/home.component.html',
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
