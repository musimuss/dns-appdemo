import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = false;
  isHiddenImg = true;
  lastScrollTop = 0;
  currentRoute: string = '';

  constructor(private elRef: ElementRef, private router: Router) {
    this.router.events.subscribe( event => {
      if ( event instanceof NavigationEnd ) {
        this.currentRoute = event.urlAfterRedirects.split('#')[0];
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          const fragment = this.router.url.split('#')[1];
          if (fragment) {
            const element = document.getElementById(fragment);
            if (element) {
              const yOffset = -70; // Ajusta esto a la altura de tu navbar
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        }, 100); // Agrega un pequeño retraso para asegurar que el DOM esté completamente cargado
      }
    });
  }

  cerrarNavbar() {
  if (window.innerWidth < 992) { // Solo cerrar si la pantalla es menor que 992px
    const navbar = this.elRef.nativeElement.querySelector(".navbar-toggler");
    if (navbar) {
      navbar.click();
    }
  }
}
  cerrarSubmenu(event: Event) {
    const target = event.target as HTMLElement;

    // Verificar si el evento proviene de un enlace con un submenu
    if (target.classList.contains('dropdown-toggle') || target.closest('.dropdown-toggle')) {
      event.stopPropagation(); // Detener la propagación del evento para evitar que se cierre el navbar
    } else {
      this.cerrarNavbar(); // Cerrar el navbar si se hace clic fuera del submenu
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Cerrar el offcanvas si la pantalla se hace grande mientras está abierto
    const offcanvasElement = this.elRef.nativeElement.querySelector(".offcanvas.show");
    if (offcanvasElement && window.innerWidth >= 992) {
      offcanvasElement.classList.remove('show');
    }
  }

  @HostListener('window:scroll',['$event'])
  onWindowScroll(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop ) {
      this.isHidden = true;
      this.isHiddenImg = false;
    } else {
      this.isHidden = false;
      this.isHiddenImg = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
