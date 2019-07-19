import { Component } from '@angular/core';

import { BaseComponent } from '../app.component';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent extends BaseComponent {
  title = 'Code';
}
