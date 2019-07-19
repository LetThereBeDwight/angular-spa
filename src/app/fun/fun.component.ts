import { Component } from '@angular/core';

import { BaseComponent } from '../app.component';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent extends BaseComponent {
  title = 'Fun Stuff';
}
