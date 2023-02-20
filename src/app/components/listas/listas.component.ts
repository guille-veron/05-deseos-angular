import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista/lista.module';
import { DeseosService } from 'src/app/servicios/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  listas :Lista[];

  @ViewChild(IonList) lista:IonList;  
  @Input() terminada = true;

  constructor(private _router:Router,
              public deseosService:DeseosService,
              private alertCtrl:AlertController) {
    this.listas = deseosService.listas;

   }
  
  listaSeleccionada(lista:Lista){
    if (this.terminada) {
      this._router.navigateByUrl("/tabs/tab2/agregar/"+lista.id);  
    } else {
      this._router.navigateByUrl("/tabs/tab1/agregar/"+lista.id);
    }
    
  }

  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
    console.log(lista);
  }

  async editarNombreLista(lista:Lista){
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs:[
      {
        name:'titulo',
        placeholder: 'Nombre de la lista',
        type: 'text',
        value: lista.titulo,

      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Guardar',          
          handler: (data) => {
            if (data.titulo.length === 0 ) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
            //this._router.navigateByUrl("/tabs/tab1/agregar/"+listaId);
          }
        }
      ]
    });

    await alert.present();    
  }

  ngOnInit() {}

}
