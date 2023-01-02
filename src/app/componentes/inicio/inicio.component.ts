import { Component } from '@angular/core';
import { ValueFromArray } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  datos  = [] /* Para poder definirlo debes comentar dentro del archivo tsconfig.json, el cual encontraras en la carpeta raíz, el por defecto declarado "strict": true, */

  InsertarDatos(datoNombre:String, datoApellido:String, datoEdad:String, datoCondicion:String){
    let convertidor= parseInt(String(datoEdad))
    if(convertidor<18){
      datoCondicion = datoNombre + ' es menor de edad'
    }else{
      datoCondicion = datoNombre + ' es mayor de edad'
    }
    this.datos.push([String(datoNombre), String(datoApellido), String(datoEdad), String(datoCondicion)]);







  }
  }

