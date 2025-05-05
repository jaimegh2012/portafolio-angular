import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    public _infoPaginaService: InfoPaginaService,
    public _productosService: ProductosService
  ){
  }
  
  ngOnInit(): void {
    console.log(this._infoPaginaService.info)
  }
}
