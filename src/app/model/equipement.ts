import { Imageequipement } from './imageequipement';
import { Reservationequipement } from './reservationequipement';

export class Equipement {

    constructor(
        public id: number,
        public nom: string,
        public prix: number,
        public listImageEquipement: Array<Imageequipement>,
        public reservationequipement: Array <Reservationequipement>
    ){

    }
}
