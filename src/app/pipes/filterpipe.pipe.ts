import { Pipe, PipeTransform } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(items: HeroeModel[], searchText: string): HeroeModel[] {

    if(!items || !searchText) {
      return items;
    }
    return items.filter(items => 
            items.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
}
}