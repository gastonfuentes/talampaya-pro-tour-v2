import { StateCreator } from "zustand";


export interface Couple {

    id: string;
    nombre_completo: string;
    nombre_completo_pareja: string;
    asignado: boolean;
    categoria: string;
    categoria_id: string

}

export interface CoupleSlice {

    couples: Couple[];
    orderedCouples: Couple[];

    setCouples: (array: Couple[]) => void
    setOrderedCouple: (categoriaId: string) => void
    setEmptyOrderedCouple: () => void

}

export const createCoupleSlice: StateCreator<CoupleSlice> = (set, get) => ({

    couples: [],
    orderedCouples: [],

    setCouples: (array: Couple[]) => set({ couples: array }),
    setOrderedCouple: (categoriaId: string) => set({ orderedCouples: get().couples.filter(couple => couple.categoria_id === categoriaId) }),

    setEmptyOrderedCouple: () => set({ orderedCouples: [] })

})

