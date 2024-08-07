import { ZoneDays } from "@/interfaces";
import { Game } from "@/interfaces/game.interface";
import { StateCreator } from "zustand";


export interface GameSlice {

    game: Game
    games: Game[]


    game1: Game
    game2: Game
    game3: Game

    days: ZoneDays[]


    setDayGame1: (day: string) => void

    setDayGame: (partido: number, day: string) => void

}

export const createGameSlice: StateCreator<GameSlice> = (set, get) => ({

    game: {
        id: "",
        dia: "15",
        hora: "",
        club: "",
        cancha: 0,
        id_pareja1: "",
        id_pareja2: "",
        primerSet_pareja1: 0,
        primerSet_pareja2: 0,
        segundoSet_pareja1: 0,
        segundoSet_pareja2: 0,
        tercerSet_pareja1: 0,
        tercerSet_pareja2: 0,
        ganador_pareja1: false,
        ganador_pareja2: false
    },

    game1: {
        id: "",
        dia: "15",
        hora: "",
        club: "",
        cancha: 0,
        id_pareja1: "",
        id_pareja2: "",
        primerSet_pareja1: 0,
        primerSet_pareja2: 0,
        segundoSet_pareja1: 0,
        segundoSet_pareja2: 0,
        tercerSet_pareja1: 0,
        tercerSet_pareja2: 0,
        ganador_pareja1: false,
        ganador_pareja2: false
    },

    game2: {
        id: "",
        dia: "15",
        hora: "",
        club: "",
        cancha: 0,
        id_pareja1: "",
        id_pareja2: "",
        primerSet_pareja1: 0,
        primerSet_pareja2: 0,
        segundoSet_pareja1: 0,
        segundoSet_pareja2: 0,
        tercerSet_pareja1: 0,
        tercerSet_pareja2: 0,
        ganador_pareja1: false,
        ganador_pareja2: false
    },

    game3: {
        id: "",
        dia: "15",
        hora: "",
        club: "",
        cancha: 0,
        id_pareja1: "",
        id_pareja2: "",
        primerSet_pareja1: 0,
        primerSet_pareja2: 0,
        segundoSet_pareja1: 0,
        segundoSet_pareja2: 0,
        tercerSet_pareja1: 0,
        tercerSet_pareja2: 0,
        ganador_pareja1: false,
        ganador_pareja2: false
    },

    games: [],

    days: ["15", "16", "17", "18"],

    setDayGame1: (day) => set((state) => ({

        game1: {
            ...state.game1,
            dia: day
        }
    })),

    setDayGame: (partido: number, day: any) => {

        if (partido === 1) {
            set((state) => ({
                game1: {
                    ...state.game1,
                    dia: day
                }
            }))
        }

        if (partido === 2) {
            set((state) => ({
                game2: {
                    ...state.game2,
                    dia: day
                }
            }))
        }

        if (partido === 3) {
            set((state) => ({
                game3: {
                    ...state.game3,
                    dia: day
                }
            }))
        }
    },


})
