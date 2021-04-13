import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';


  constructor(private http:HttpClient,
    ) { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
     
  }

   getStarshipId(url){ 
    
    this.shipId = url.slice(0, -1)
    const urlImage = `${this.shipId}.jpg`
    var filename = urlImage.split('/').pop()
    var urlacortar = urlImage.split( '/' );
    var protocol = urlacortar[0];
    var host = urlacortar[2];
    var urlcambiada = protocol + '//' + host;
    urlcambiada='https://starwars-visualguide.com/assets/img/starships/'
    this.shipId = urlcambiada+filename;
    return this.shipId

   }

  

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
