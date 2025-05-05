import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(
    private route: ActivatedRoute,
    public _productosService: ProductosService
  ){
    this.route.params.subscribe(params => {
      console.log('termino search', params['termino']);

      this._productosService.buscarProducto(params['termino']);
    })
  }

}
