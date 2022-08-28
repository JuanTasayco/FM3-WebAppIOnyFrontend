import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from '../interface/info.interface';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(nombrePelicula : string, carpeta: string ="trending" ): string  {
    let nombre : string = nombrePelicula.replaceAll(" ","-").toLocaleLowerCase();
    console.log(nombre)
    const urlPelicula : string = `./assets/thumbnails/${nombre}/${carpeta}/large.jpg`
    return urlPelicula
   
  }

}
