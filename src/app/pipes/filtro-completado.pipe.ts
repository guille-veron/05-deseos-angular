import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista/lista.module';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter(lista => lista.completada === completada);
  }

}
