import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor (private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        this.adjustScroll();
      }
    });

    window.addEventListener('load', () => this.adjustScroll());
  }

  adjustScroll() {
    setTimeout(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          const yOffset = -0.1 * window.innerHeight;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }
    }, 100);
  }

}
