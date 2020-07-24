import { Reservation } from './reservation';

export class Client {

    constructor(
        public nom: string,
        public sexe: string,
        public mail: string,
        public status: string ,
        public contact: string,
        public listreservation: Array<Reservation>
    ){}
}
