import { Component } from '@angular/core';

//Model
import { Producto } from "../../../interfaces/productos";
//Database
import { productos } from "../../../database/productos";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  productos: Producto[] = productos;

  sendWhatsapp(producto: any) {
    const titulo = producto.titulo;
    const descripcion = producto.descripcion;
    const mensaje = `Hola, quiero cotizar este producto: \n${titulo}\n${descripcion}`;

    const url = `https://wa.me/+59169642535?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
