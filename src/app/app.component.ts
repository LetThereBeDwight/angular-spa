import { AfterContentInit, Component, } from '@angular/core';

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
  templateUrl: './templates/nav.component.html',
})
export class NavComponent {
  static active = 'home';
  static activeTextColor = '#6c71c4';
  static activeBorderStyle = '0.1rem solid '.concat(NavComponent.activeTextColor);

  static setActive(title: any): any {
    NavComponent.active = title;

    const activeLink = document.getElementById(title);
    if (activeLink) {
      activeLink.style.color = NavComponent.activeTextColor;
      activeLink.style.border = NavComponent.activeBorderStyle;
    }
  }

  scrollToTop() {
      (function smoothscroll() {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }
}

@Component({
  templateUrl: './templates/home.component.html',
})
export class HomeComponent {}

@Component({})
abstract class BaseComponent implements AfterContentInit {
    abstract title;

    ngAfterContentInit() {
      NavComponent.setActive(this.title);
    }
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class ResumeComponent extends BaseComponent {
  title = 'Resume';

  LANGUAGES = [
    'C/C++/C++11',
    'Python',
    'Javascript/Typescript',
    'Java',
    'C#',
    'HTML',
    'CSS/SASS/SCSS',
  ];

  APIS_LIBRARIES_FRAMEWORKS = [
    'STL',
    'Boost',
    'AWS',
    'GDAL',
    'GEOS',
    'OpenCV',
    'ASF',
    'Swing',
    'Bootstrap',
    'CUDA',
    'Angular',
    'VueJS',
    'Node.js',
  ];

  TOOLS = [
    'Git',
    'GitHub',
    'BitBucket',
    'JIRA',
    'Visual Studio',
    'SVN',
    'Mercurial',
    'Make/CMake',
    'GDB',
    'Valgrind',
    'AutoConf',
    'Powershell',
    'Bash',
  ];

  DATABASES = [
    'PostgresSQL',
    'MySQL',
    'JDBC',
    'Access/SQLServer'
  ];

  OPERATING_SYSTEMS = [
    'Linux - Ubuntu, RedHat, and CentOS',
    'Windows',
    'MacOS',
  ];

  METHODOLOGIES = [
    'Iterative Development',
    'Agile Development',
    'Test-Driven Development',
    'Feature-Driven Development',
    'Object Oriented Development',
    'Functional Development',
  ];

  RESUME_FORMATS = [
    'PDF',
    'DOCX',
  ];
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class CodeComponent extends BaseComponent {
    title = 'Code';
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class FunComponent extends BaseComponent {
    title = 'Fun Stuff';
}
