import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  anio: number = new Date().getFullYear();

  constructor(
    public _servicio: InfoPaginaService
  ){

  }
}
