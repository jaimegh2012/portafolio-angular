import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos.interface';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  constructor(
    private http: HttpClient
  ) { 
    this.obtenerProductosIdx();
  }

  private obtenerProductosIdx(){
    return new Promise<void>((resolve, reject) => {
      this.http.get(`https://portafolio-angu-default-rtdb.firebaseio.com/productos_idx.json`)
      .subscribe((resp: any) => {
        this.productos = resp;
        this.cargando = false;
        // console.log('productos: ', this.productos);
        resolve();
      });
    })
  }

  public getProducto(id: string){
    return this.http.get(`https://portafolio-angu-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string){
    console.log('termino buscarProducto', termino);

    if (this.productos.length === 0) {
      console.log('no habia productos');
      
      this.obtenerProductosIdx().then(() => {
        this.filtrarProductos(termino);
      })
    }else{
      console.log('si habia productos');
      this.filtrarProductos(termino);
    }
    
  }


  filtrarProductos(termino: string){
    const terminoLower = this.removeAccents(termino.toLowerCase());
    console.log('sin acentos: ', terminoLower);
    
    this.productosFiltrados = []
    this.productos.forEach(producto => {
      const tituloLower = this.removeAccents(producto.titulo.toLowerCase());
      if (producto.categoria.indexOf(terminoLower) >= 0 || tituloLower.indexOf(terminoLower) >= 0) {
        this.productosFiltrados.push(producto);
      }
    });

    console.log(this.productosFiltrados);
    
  }

  removeAccents(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
}
