import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
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