import { ZoneClub, ZoneCourts, ZoneDays, ZoneHours } from "@/interfaces";
import { Game, GamesSet } from "@/interfaces/game.interface";
import { StateCreator } from "zustand";


export interface GameSlice {

    game: Game
    games: Game[]


    game1: Game
    game2: Game
    game3: Game

    days: ZoneDays[]
    hours: ZoneHours[]
    clubs: ZoneClub[]
    courts: ZoneCourts[]
    gamesSet: GamesSet[]


    /* setDayGame1: (day: string) => void */

    setDayGame: (partido: number, day: string) => void
    setHourGame: (partido: number, hour: string) => void
    setClubGame: (partido: number, club: string) => void
    setCourtGame: (partido: number, court: number) => void
    setGamesSet: (partido: number, pareja: number, sets: number, game: number) => void

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

    hours: ["15:00", "15:30", "16:00", "16:30"],

    clubs: ["Cerro", "Mirador"],

    courts: [1, 2, 3, 4, 5, 6, 7, 8],

    gamesSet: [0, 1, 2, 3, 4, 5, 6, 7],

    /*  setDayGame1: (day) => set((state) => ({
 
         game1: {
             ...state.game1,
             dia: day
         }
     })), */

    setDayGame: (partido: number, day: string) => {

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



    setHourGame: (partido: number, hour: string) => {

        if (partido === 1) {
            set((state) => ({
                game1: {
                    ...state.game1,
                    hora: hour
                }
            }))
        }

        if (partido === 2) {
            set((state) => ({
                game2: {
                    ...state.game2,
                    hora: hour
                }
            }))
        }

        if (partido === 3) {
            set((state) => ({
                game3: {
                    ...state.game3,
                    hora: hour
                }
            }))
        }
    },


    setClubGame: (partido: number, club: string) => {

        if (partido === 1) {
            set((state) => ({
                game1: {
                    ...state.game1,
                    club: club
                }
            }))
        }

        if (partido === 2) {
            set((state) => ({
                game2: {
                    ...state.game2,
                    club: club
                }
            }))
        }

        if (partido === 3) {
            set((state) => ({
                game3: {
                    ...state.game3,
                    club: club
                }
            }))
        }
    },

    setCourtGame: (partido: number, court: number) => {

        if (partido === 1) {
            set((state) => ({
                game1: {
                    ...state.game1,
                    cancha: court
                }
            }))
        }

        if (partido === 2) {
            set((state) => ({
                game2: {
                    ...state.game2,
                    cancha: court
                }
            }))
        }

        if (partido === 3) {
            set((state) => ({
                game3: {
                    ...state.game3,
                    cancha: court
                }
            }))
        }
    },


    setGamesSet: (partido: number, pareja: number, sets: number, game: number) => {

        if (partido === 1) {
            if (pareja === 1) {
                if (sets === 1) set((state) => ({ game1: { ...state.game1, primerSet_pareja1: game } }))
                if (sets === 2) set((state) => ({ game1: { ...state.game1, segundoSet_pareja1: game } }))
                if (sets === 3) set((state) => ({ game1: { ...state.game1, tercerSet_pareja1: game } }))
            }
            if (pareja === 2) {
                if (sets === 1) set((state) => ({ game1: { ...state.game1, primerSet_pareja2: game } }))
                if (sets === 2) set((state) => ({ game1: { ...state.game1, segundoSet_pareja2: game } }))
                if (sets === 3) set((state) => ({ game1: { ...state.game1, tercerSet_pareja2: game } }))
            }
        }

        if (partido === 2) {
            if (pareja === 1) {
                if (sets === 1) set((state) => ({ game2: { ...state.game2, primerSet_pareja1: game } }))
                if (sets === 2) set((state) => ({ game2: { ...state.game2, segundoSet_pareja1: game } }))
                if (sets === 3) set((state) => ({ game2: { ...state.game2, tercerSet_pareja1: game } }))
            }
            if (pareja === 2) {
                if (sets === 1) set((state) => ({ game2: { ...state.game2, primerSet_pareja2: game } }))
                if (sets === 2) set((state) => ({ game2: { ...state.game2, segundoSet_pareja2: game } }))
                if (sets === 3) set((state) => ({ game2: { ...state.game2, tercerSet_pareja2: game } }))
            }
        }

        if (partido === 3) {
            if (pareja === 1) {
                if (sets === 1) set((state) => ({ game3: { ...state.game3, primerSet_pareja1: game } }))
                if (sets === 2) set((state) => ({ game3: { ...state.game3, segundoSet_pareja1: game } }))
                if (sets === 3) set((state) => ({ game3: { ...state.game2, tercerSet_pareja1: game } }))
            }
            if (pareja === 2) {
                if (sets === 1) set((state) => ({ game3: { ...state.game3, primerSet_pareja2: game } }))
                if (sets === 2) set((state) => ({ game3: { ...state.game3, segundoSet_pareja2: game } }))
                if (sets === 3) set((state) => ({ game3: { ...state.game2, tercerSet_pareja2: game } }))
            }
        }
    },


})
