import { Component } from '@angular/core';

import { BaseComponent } from '../app.component';

function caseInsensitiveSort(a, b) {
  return a.localeCompare(b, 'en', {sensitivity: 'base'});
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent extends BaseComponent {
  title = 'Resume';

  readonly LANGUAGES = [
    'C/C++/C++11',
    'Python',
    'Javascript',
    'Typescript',
    'Java',
    'C#',
    'HTML',
    'CSS',
  ].sort(caseInsensitiveSort);

  readonly APIS_LIBRARIES_FRAMEWORKS = [
    'Angular (2+)',
    'Vue',
    'Node',
    'Express',
    'STL',
    'Boost',
    'AWS',
    'GDAL',
    'GEOS',
    'OpenCV',
    'ASF',
    'Bootstrap',
    'CUDA',
    'TensorFlow',
    'Caffe',
    'Bluetooth',
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
    'NextReports',
    'NPM',
  ].sort(caseInsensitiveSort);

  readonly DATABASES = [
    'PostgresSQL',
    'MySQL',
    'JDBC',
    'MSSQL/SQLServer'
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
    'CI/CD',
  ].sort(caseInsensitiveSort);

  readonly RESUME_FORMATS = [
    'PDF',
    'DOCX',
  ].sort(caseInsensitiveSort);

  downloadResume() {
    console.log('here');
  }
}