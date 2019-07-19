import { OnInit, Component, } from '@angular/core';

import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-spa';
}

@Component({})
export abstract class BaseComponent implements OnInit {
    public abstract title;

    ngOnInit() {
      NavComponent.setActive(this.title);
    }
}