import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetalle } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  producto?: ProductoDetalle;
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    public _productoService: ProductosService
  ){
    route.params.subscribe(params => {
      console.log(params['id']);
      
      this._productoService.getProducto(params['id'])
      .subscribe((resp: any) => {
        this.producto = resp;
        this.id = params['id'];
        console.log('data producto: ', this.producto);
      })
    })
  }
}
