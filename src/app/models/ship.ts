export class Ship {

    public id: number;
    public MGLT: number;
    public cargo_capacity:number;
    public consumables: string;
    public cost_in_credits: number;
    public created: Date;
    public crew: number;
    public hyperdrive_rating: number;
    public length: number;
    public manufacturer: string;
    public max_atmosphering_speed: string;
    public model: string;
    public name: string;
    public passengers: number;
    public films: Array<any>;
    public pilots: Array<any>;
    public starship_class: string;
    public url: string;
    public statusmessage:string;



    constructor( 
     statusmessage: string,
     id: number,
     MGLT: number,
     cargo_capacity:number,
     consumables: string,
     cost_in_credits: number,
     created: Date,
     crew: number,
     hyperdrive_rating: number,
     length: number,
     manufacturer: string,
     max_atmosphering_speed: string,
     model: string,
     name: string,
     passengers: number,
     films: Array<any>,
     pilots: Array<any>,
     starship_class: string,
     url: string
     ) {

    this.id= 0;
    this.MGLT= 0;
    this.cargo_capacity=0;
    this.consumables= "";
    this.cost_in_credits= 0;
    this.created= new Date();
    this.crew= 0;
    this.hyperdrive_rating= 0;
    this.length= 0;
    this.manufacturer= "";
    this.max_atmosphering_speed= "";
    this.model= "";
    this.name= "";
    this.passengers= 0;
    this.films= [];
    this.pilots= [];
    this.starship_class= "";
    this.url= "";

    }

}
