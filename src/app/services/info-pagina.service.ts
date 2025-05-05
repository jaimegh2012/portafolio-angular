import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina, equipo } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  equipo: equipo[] = []
  cargada = false;
  constructor(
    private _httpClient: HttpClient
  ) { 
    this.cargarInfo();
    this.cargarEquipo();
  }
  
  private cargarInfo(){
    // console.log('servicio iniciado');
    this._httpClient.get('data/data-pagina.json')
    .subscribe(resp => {
      this.cargada = true;
      this.info = resp
      // console.log('data:', this.info)
    });
  }

  private cargarEquipo(){
    this._httpClient.get('https://portafolio-angu-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe((resp: any) => {
      console.log('data fire: ', resp);
      this.equipo = resp;
      // console.log(this.equipo[0].nombre)
    })
  }
}
