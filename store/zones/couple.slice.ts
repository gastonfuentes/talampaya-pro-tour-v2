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

    draggingCoupleId?: string;
    coupleOne: Couple | undefined;

    setCouples: (array: Couple[]) => void
    setOrderedCouple: (categoriaId: string) => void
    setEmptyOrderedCouple: () => void

    setDraggingCoupleId: (id: string) => void
    removeDraggingCoupleId: () => void

    setCoupleOne: (id: string) => void

}

export const createCoupleSlice: StateCreator<CoupleSlice> = (set, get) => ({

    couples: [],
    orderedCouples: [],
    draggingCoupleId: undefined,
    coupleOne: undefined,

    setCouples: (array: Couple[]) => set({ couples: array }),
    setOrderedCouple: (categoriaId: string) => set({ orderedCouples: get().couples.filter(couple => couple.categoria_id === categoriaId) }),

    setEmptyOrderedCouple: () => set({ orderedCouples: [] }),

    setDraggingCoupleId: (id: string) => set({ draggingCoupleId: id }),
    removeDraggingCoupleId: () => set({ draggingCoupleId: undefined }),

    setCoupleOne: (id: string) => set({ coupleOne: get().couples.find(couple => couple.id === id) })

})

