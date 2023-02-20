import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item/lista-item.module';
import { Lista } from 'src/app/models/lista/lista.module';
import { DeseosService } from 'src/app/servicios/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista:Lista;
  nombreItem = '';
  constructor(private _deseosService: DeseosService,
              private _route: ActivatedRoute) { 
    const listaId = _route.snapshot.paramMap.get('listaId');
    this.lista = _deseosService.obtenerLista(listaId);
  }

  agregarItem(){
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';

    this._deseosService.guardarStorage();
  }

  cambioCheck(item:ListaItem){
    console.log(item);
    const pendientes = this.lista.items.filter(dataList => !dataList.completado).length;
   if (pendientes === 0) {
      this.lista.completada = true;
      this.lista.terminadaEn = new Date();
   } else { 
    this.lista.completada = false;
    this.lista.terminadaEn = null;
   }
    this._deseosService.guardarStorage();
  }

  borrar(i:number){
    this.lista.items.splice(i, 1)
    this._deseosService.guardarStorage();
  }
  ngOnInit() {
  }

}
