// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class ListaItem {
  desc :string;
  completado :boolean;

  constructor(desc:string){
    this.desc = desc;
    this.completado = false;
  }
 }
