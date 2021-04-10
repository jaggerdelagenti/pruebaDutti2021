import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { Store } from '@ngrx/store';
import { Ship } from '../../models/ship';
import { AppState } from '../../app.reducer';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  constructor( private shipsService: ShipsService,
  private _store:Store<AppState>) {}

  ngOnInit(): void {
    this._store.select('ships').subscribe(ships=>{
      this.dataList.push(ships);
      console.log('ALL SHIPS WITH REDUCER -->', this.dataList.results)
    })
    
    
     this.shipsService.getShips().subscribe((ships) => {
       this.dataList = ships;
       console.log('SHIPS -->', this.dataList.results)
     })
  }
}
