import { Injectable } from '@angular/core';
import { Lista } from '../models/lista/lista.module';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas : Lista[] = [];


  constructor() { 
    this.cargarStorage();
    // const lista1 = new Lista("Esta es una lista de Prueba");
    // const lista2 = new Lista("Esta es una Otra lista de Prueba");

    // this.listas.push(lista1, lista2);
  }

  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    if (localStorage.getItem('data'))
      this.listas = JSON.parse(localStorage.getItem('data'));
  }

  obtenerLista(id: string | number){
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
  }

  borrarLista(lista:Lista){
    this.listas = this.listas.filter(listaData => listaData.id != lista.id);

    this.guardarStorage();
  }
  
}
