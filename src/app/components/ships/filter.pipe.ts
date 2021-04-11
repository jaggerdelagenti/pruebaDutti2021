import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from '../../models/ship';
import { ValidFilters } from '../../filters/filter.actions';

@Pipe({
  name: 'filtership'
})
export class filterPipe implements PipeTransform {

  transform( ships: Ship[], filter: ValidFilters ): Ship[] {

    switch( filter ) {

      case 'todos':
        return ships.filter( ship => ship );

      default:
        return ships;
    }
  }

}