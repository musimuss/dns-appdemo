import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { PrincipalComponent } from './principal/principal.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsBrandsComponent } from './solutions-brands/solutions-brands.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    ProductsComponent,
    PrincipalComponent,
    ServicesComponent,
    SolutionsBrandsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HomeModule { }
