import { Component, OnInit } from '@angular/core';

import { Producto } from "../../../interfaces/productos";
import { productos } from "../../../database/productos";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  productos: Producto[] = productos;
  productosRandom: Producto[] = [];

  ngOnInit() {
    this.productosRandom = this.getProductosRandom(8);
  }

  getProductosRandom(cantidad: number): Producto[] {
    const productosCopy = [...this.productos];
    const selections = [];

    for (let i = 0; i < cantidad && productosCopy.length; i++) {
      const indexRandom = Math.floor(Math.random() * productosCopy.length );
      selections.push(productosCopy[indexRandom]);
      productosCopy.splice(indexRandom, 1);
    }

    return selections;
  }

  sendWhatsapp(producto: any) {
    const titulo = producto.titulo;
    const descripcion = producto.descripcion;
    const mensaje = `Hola, quiero cotizar este producto: \n${titulo}\n${descripcion}`;

    const url = `https://wa.me/+59169642535?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
