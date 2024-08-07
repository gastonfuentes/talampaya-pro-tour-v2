import { ZoneDays } from "./zone.interface";


export interface Game {

    id: string;
    dia: string;
    hora: string;
    club: string;
    cancha: number;
    id_pareja1: string;
    id_pareja2: string;
    primerSet_pareja1: number;
    primerSet_pareja2: number;
    segundoSet_pareja1: number;
    segundoSet_pareja2: number;
    tercerSet_pareja1: number;
    tercerSet_pareja2: number;
    ganador_pareja1: boolean;
    ganador_pareja2: boolean;
}

export type GamesSet = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7