import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrl: './button-up.component.css'
})
export class ButtonUpComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
}
