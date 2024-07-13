import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsBrandsComponent } from './solutions-brands/solutions-brands.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: PrincipalComponent },
    { path: 'quienes-somos', component: AboutUsComponent },
    { path: 'servicios', component: ServicesComponent },
    { path: 'productos', component: ProductsComponent },
    { path: 'soluciones-marcas', component: SolutionsBrandsComponent },
    { path: 'contacto', component: ContactComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
