import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { Store } from '@ngrx/store';
import { Ship } from '../../models/ship';
import { AppState } from '../../app.reducer';
import { ValidFilters } from '../../filters/filter.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  filterActual: ValidFilters;

  constructor( private shipsService: ShipsService,
  private _store:Store<AppState>) {}

  ngOnInit(): void {

    this._store.subscribe( ({ ships, filter }) => {
      console.log(ships);
      this.dataList.push(ships);
      this.filterActual = filter;
      console.log('ALL SHIPS WITH REDUCER -->', this.dataList.results)
    });

    this.shipsService.getShips().subscribe((ships) => {
       this.dataList = ships;
       console.log('SHIPS -->', this.dataList.results)
    })
  }
}
