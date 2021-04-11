import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/app/services/ships.service';
import { Store } from '@ngrx/store';
import { Ship } from '../../models/ship';
import { AppState } from 'src/app/store/app.reducers';

import { loadShips } from '../../store/actions/ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  ships: Ship[] = [];
  loading: boolean = false;
  error: any;

  constructor( private shipService: ShipService,
  private store:Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('ships').subscribe( ({ ships, loading, error }) => {
      this.ships = ships;
      this.loading  = loading;
      this.error    = error;
    });
    
    this.store.dispatch( loadShips() );

    // this.shipsService.getShips().subscribe((ships) => {
    //     this.dataList = ships;
    //     console.log('SHIPS -->', this.dataList.results)
    // })
  }
}

