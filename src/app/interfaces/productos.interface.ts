export interface Producto {
  categoria: string;
  cod: string;
  titulo: string;
  url: string;
}

export interface ProductoDetalle {
  categoria: string;
  desc1: string;
  desc2: string;
  producto: string;
  resumen: string;
  subtitulo1: string;
  subtitulo2: string;
}