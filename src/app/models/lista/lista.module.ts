// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ListaItem } from "../lista-item/lista-item.module";



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class Lista { 
  id : number;
  titulo: string;
  creadaEn :Date;
  terminadaEn :Date;
  completada : boolean;
  items : ListaItem[];

  constructor(titulo:string){
    this.titulo = titulo;
    this.creadaEn = new Date();
    this.completada = false;
    this.items = [];
    this.id = new Date().getTime();

  }
}
