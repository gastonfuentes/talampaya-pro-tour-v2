import { create } from "zustand";

import { devtools } from 'zustand/middleware'


export type Couple = {
    created_at: string,
    id: string,
    name1: string,
    last_name1: string,
    name2: string,
    last_name2: string,
}

export type State = {

    couples: Couple[]

    addCouple: (created_at: string, id: string, name1: string, last_name1: string, name2: string, last_name2: string) => void

    addCouples: (array: Couple[]) => void
}


export const useCoupleStore = create<State>()(
    devtools(
        (set) => ({
            couples: [],

            addCouple: (created_at: string, id: string, name1: string, last_name1: string, name2: string, last_name2: string,) => set((state) => ({
                couples: [
                    ...state.couples,
                    { created_at, id, name1, name2, last_name1, last_name2 }
                ]
            })),

            addCouples: (array: Couple[]) => set((state) => ({
                couples: [
                    /* ...state.couples, */
                    ...array
                ]
            }))
        }))
)

