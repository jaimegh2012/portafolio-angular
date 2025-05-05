import { Component, ElementRef, ViewChild } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('inputBusqueda') inputBusqueda!: ElementRef<HTMLInputElement>;
  constructor(
    public _servicio: InfoPaginaService, 
    private router: Router
  ){

  }


  buscarProducto(termino: string){

    if (termino.length < 1) {
      return;
    }

    console.log('termino header', termino);
    

    this.router.navigate(['/search', termino]);

    this.inputBusqueda.nativeElement.value = ''
  }
}
