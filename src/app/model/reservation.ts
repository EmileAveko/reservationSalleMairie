import { Reservationequipement } from './reservationequipement';

export class Reservation {


    constructor(
        public id: number,
        public nomev: string,
        public nbrpers: number,
        public heuredep: string,
        public heurefin: string ,
        public nbpers: number,
        public reservationequipement: Array<Reservationequipement>

    ){}
}
