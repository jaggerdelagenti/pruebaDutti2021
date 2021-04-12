export class Ship {

    // public id: number;
    // public MGLT: number;
    // public cargo_capacity:number;
    // public consumables: string;
    // public cost_in_credits: number;
    // public created: Date;
    // public crew: number;
    // public hyperdrive_rating: number;
    // public length: number;
    // public manufacturer: string;
    // public max_atmosphering_speed: string;
    // public model: string;
    // public name: string;
    // public passengers: number;
    // public films: Array<any>;
    // public pilots: Array<any>;
    // public starship_class: string;
    // public url: string;
    // public statusmessage:string;



    constructor( 
     public statusmessage: string,
     public id: number,
     public MGLT: number,
     public cargo_capacity:number,
     public consumables: string,
     public cost_in_credits: number,
     public created: Date,
     public crew: number,
     public hyperdrive_rating: number,
     public length: number,
     public manufacturer: string,
     public max_atmosphering_speed: string,
     public model: string,
     public name: string,
     public passengers: number,
     public films: Array<any>,
     public pilots: Array<any>,
     public starship_class: string,
     public url: string
     ) {}

}
