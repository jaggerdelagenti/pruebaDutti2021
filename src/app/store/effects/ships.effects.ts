import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as shipsActions from '../actions/ships.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { ShipsService } from '../../services/ships.service';
import { of } from 'rxjs';

@Injectable()
export class ShipsEffects {

    constructor(
        private actions$: Actions,
        private shipService: ShipsService
    ){}

    loadships$ = createEffect(
        () => this.actions$.pipe(
            ofType( shipsActions.loadships ),
            mergeMap(
                () => this.shipService.getShips()
                    .pipe(
                        map( ships => shipsActions.loadShipsSuccess({ ships: ships }) ),
                        catchError( err => of(shipsActions.loadShipsError({ payload: err })) )
                    )
            )
        )
    );

}