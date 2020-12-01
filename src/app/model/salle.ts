import { Equipement } from './equipement';

export class Salle {

    constructor(
       public nomsal: string,
       public adress: string,
       public capmin: number,
       public capmax: number,
       public prix: number,
       public etat: string,
       public surface: number,
       public listEquipements: Array<Equipement>)
       {

    }

}
