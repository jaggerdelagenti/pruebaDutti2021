import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as shipsActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { ShipService } from '../../services/ships.service';
import { of } from 'rxjs';

@Injectable()
export class ShipEffects {

    constructor(
        private actions$: Actions,
        private shipService: ShipService
    ){}

     loadship$ = createEffect(
         () => this.actions$.pipe(
             ofType( shipsActions.loadShip ),
             mergeMap(
                 ( action ) => this.shipService.getShipById( action.id )
                     .pipe(
                         map( ship => shipsActions.loadShipSuccess({ ship: ship }) ),
                         catchError( err => of(shipsActions.loadShipError({ payload: err })) )
                     )
             )
         )
     );

}