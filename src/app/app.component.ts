import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'DNS - Design Network Security';

  constructor (private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe( event => {
      if ( event instanceof NavigationEnd ) {
        const tree = this.router.parseUrl(this.router.url);
        if(tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start"});
          }
        }
      }
    })
  }
}
