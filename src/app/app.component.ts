import { OnInit, Component, } from '@angular/core';

function caseInsensitiveSort(a, b) {
  return a.localeCompare(b, 'en', {sensitivity: 'base'});
}

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
  static activeColor = '#6c71c4';

  static setActive(title: any): any {
    NavComponent.active = title;

    const activeLink = document.getElementById(title);
    if (activeLink) {
      activeLink.style.color = NavComponent.activeColor;
      activeLink.style.borderColor = NavComponent.activeColor;
    }
  }

  get active() {
    return NavComponent.active;
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
abstract class BaseComponent implements OnInit {
    abstract title;

    ngOnInit() {
      NavComponent.setActive(this.title);
    }
}

@Component({
  templateUrl: './templates/resume.component.html',
})
export class ResumeComponent extends BaseComponent {
  title = 'Resume';

  readonly LANGUAGES = [
    'C/Embedded/C++/C++11',
    'Python',
    'Javascript/Typescript',
    'Java',
    'C#',
    'HTML',
    'CSS/SCSS',
  ].sort(caseInsensitiveSort);

  readonly APIS_LIBRARIES_FRAMEWORKS = [
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
    'Vue',
    'Node',
    'TensorFlow',
    'Caffe',
    'Bluetooth',
    'jQuery',
    'Material',
  ].sort(caseInsensitiveSort);

  readonly TOOLS = [
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
    'Bash/Sh',
    'Docker/docker-compose',
    'QGIS',
    'Trello',
    'NextReports',
  ].sort(caseInsensitiveSort);

  readonly DATABASES = [
    'PostgresSQL',
    'MySQL',
    'JDBC',
    'Access/SQLServer'
  ].sort(caseInsensitiveSort);

  readonly OPERATING_SYSTEMS = [
    'Ubuntu',
    'RedHat',
    'CentOS',
    'Windows',
    'MacOS',
  ].sort(caseInsensitiveSort);

  readonly METHODOLOGIES = [
    'Iterative',
    'Agile',
    'Test Driven',
    'Feature Driven',
    'Object Oriented',
    'Functional',
  ].sort(caseInsensitiveSort);

  readonly RESUME_FORMATS = [
    'PDF',
    'DOCX',
  ].sort(caseInsensitiveSort);

  downloadResume() {
    console.log('here');
  }
}

@Component({
  templateUrl: './templates/code.component.html',
})
export class CodeComponent extends BaseComponent {
    title = 'Code';
}

@Component({
  templateUrl: './templates/fun.component.html',
})
export class FunComponent extends BaseComponent {
    title = 'Fun Stuff';
}
