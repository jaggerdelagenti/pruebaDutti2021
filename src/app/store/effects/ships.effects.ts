import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as shipsActions from '../actions/ships.actions';
import { tap,mergeMap, map, catchError } from 'rxjs/operators';
import {ShipService} from '../../services/ships.service'
import { of } from 'rxjs';


@Injectable()
export class ShipsEffects {

    constructor(
        private actions$: Actions,
        private shipService: ShipService
    ){}

    loadShips$ = createEffect(
        () => this.actions$.pipe(
            ofType( shipsActions.loadShips ),
            mergeMap(
                () => this.shipService.getShips()
                    .pipe(
                        map( otroships => shipsActions.loadShipsSuccess({ ships: otroships }) ),
                        catchError( err => of(shipsActions.loadShipsError({ payload: err })) )
                    )
            )
        )
    );

    

}