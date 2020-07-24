import { Imageequipement } from './imageequipement';

export class Equipement {

    constructor(
        public nom: string,
        public prix: number,
        public listImageEquipement: Array<Imageequipement>
    ){

    }
}
