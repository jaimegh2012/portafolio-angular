import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/productos.interface';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: producto[] = [];
  constructor(
    private http: HttpClient
  ) { 
    this.obtenerProductosIdx();
  }

  private obtenerProductosIdx(){
    this.http.get('https://portafolio-angu-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: any) => {
      this.productos = resp;
      this.cargando = false;
      // console.log('productos: ', this.productos);
    });
  }
}
