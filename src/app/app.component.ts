import { Component, AfterContentInit } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-spa';
}

@Component({
  selector: 'app-topnav',
  templateUrl: './templates/topnav.component.html',
  animations: [fadeAnimation],
})
export class TopNavComponent {
  static active = 'home';
  static activeTextColor = '#268bd2';
  static activeBorderStyle = '0.1rem solid '.concat(TopNavComponent.activeTextColor);

  static setActive(title: any): any {
    TopNavComponent.active = title;
    const activeLink = document.getElementById(title);
    if (activeLink) {
      activeLink.style.color = TopNavComponent.activeTextColor;
      activeLink.style.border = TopNavComponent.activeBorderStyle;
    }
  }
}

@Component({
  templateUrl: './templates/home.component.html',
})
export class HomeComponent {
    title = 'home';
}

@Component({})
abstract class BaseComponent implements AfterContentInit {
    abstract title;

    ngAfterContentInit() {
      TopNavComponent.setActive(this.title);
    }
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class ResumeComponent extends BaseComponent {
    title = 'resume';
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class CodeComponent extends BaseComponent {
    title = 'code';
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class FunComponent extends BaseComponent {
    title = 'fun_stuff';
}
