import { StateCreator } from "zustand";


export interface Couple {

    id: string;
    nombre_completo: string;
    nombre_completo_pareja: string;
    asignado: boolean;
    categoria: string;
    categoria_id: string;
    clasificado: boolean

}

export interface CoupleSlice {

    couples: Couple[];
    orderedCouples: Couple[];
    designatedCouples: Couple[];

    draggingCoupleId?: string;
    coupleOne: Couple | undefined;
    coupleTwo: Couple | undefined;

    setCouples: (array: Couple[]) => void
    setOrderedCouple: (categoriaId: string) => void
    setEmptyOrderedCouple: () => void

    setDraggingCoupleId: (id: string) => void
    removeDraggingCoupleId: () => void

    setCoupleOne: (id: string) => void
    setCoupleTwo: (id: string) => void

    //getCouplesNotAssigned: () => Couple[]

    //update a parejas ordenadas por categoria 
    setNewOrderedCouples: (id: string) => void

    //otro metodo que devuelve parejas de una determinada categoria y con campo asignado en false
    getCouplesCategories: (categoriaId: string) => Couple[]

    //ponermos una pareja al array de parejas asignadas
    setDesignatedCouples: (id: string) => void

    //mover pareja del array asignadas a el array de ordenadas
    setMoveCouple: (id: string) => void

    //quitar couple de la zona recibiendo la posicion por parametro
    removeCoupleZone: (position: string) => void

    //quitar todas las parejas de la zona
    removeAllCouplesZone: () => void

}

export const createCoupleSlice: StateCreator<CoupleSlice> = (set, get) => ({

    couples: [],
    orderedCouples: [],
    draggingCoupleId: undefined,
    coupleOne: undefined,
    coupleTwo: undefined,
    designatedCouples: [],

    setCouples: (array: Couple[]) => set({ couples: array }),

    setOrderedCouple: (categoriaId: string) => set({ orderedCouples: get().couples.filter(couple => couple.categoria_id === categoriaId && couple.asignado === false) }),

    setEmptyOrderedCouple: () => set({ orderedCouples: [] }),

    setDraggingCoupleId: (id: string) => set({ draggingCoupleId: id }),
    removeDraggingCoupleId: () => set({ draggingCoupleId: undefined }),

    setCoupleOne: (id: string) => set({ coupleOne: get().couples.find(couple => couple.id === id) }),
    setCoupleTwo: (id: string) => set({ coupleTwo: get().couples.find(couple => couple.id === id) }),


    setNewOrderedCouples: (id: string) => {
        const coupleAsigned = get().orderedCouples.filter(couple => couple.id !== id)
        set((state) => ({ orderedCouples: coupleAsigned }))
    },


    getCouplesCategories: (categoriaId: string) => {
        const couples = get().couples
        return couples.filter(couple => couple.categoria_id === categoriaId && couple.asignado === false)
    },


    //funcion que busca la pareja asignada y la ubica en el array de parejas asignadas
    setDesignatedCouples: (id: string) => {

        const newCouple: Couple | undefined = get().couples.find(couple => couple.id === id)

        if (!newCouple) return

        set((state) => ({
            designatedCouples: [
                ...state.designatedCouples,
                {
                    id: newCouple.id,
                    asignado: newCouple.asignado,
                    categoria: newCouple.categoria,
                    categoria_id: newCouple.categoria_id,
                    clasificado: newCouple.clasificado,
                    nombre_completo: newCouple.nombre_completo,
                    nombre_completo_pareja: newCouple.nombre_completo_pareja
                }
            ]

        }))
    },

    setMoveCouple: (id: string) => {

        const newCouple = get().designatedCouples?.find(couple => couple.id === id)
        const nuevoArray = get().designatedCouples?.filter(couple => couple.id !== id)

        if (!newCouple) return

        set((state) => ({
            designatedCouples: nuevoArray,
            orderedCouples: [
                ...state.orderedCouples,
                {
                    id: newCouple.id,
                    asignado: newCouple.asignado,
                    categoria: newCouple.categoria,
                    categoria_id: newCouple.categoria_id,
                    clasificado: newCouple.clasificado,
                    nombre_completo: newCouple.nombre_completo,
                    nombre_completo_pareja: newCouple.nombre_completo_pareja
                }
            ]

        }))
    },

    removeCoupleZone: (position: string) => {

        if (position === 'position1') set({ coupleOne: undefined })
        if (position === 'position2') set({ coupleTwo: undefined })
        //if(position === 'position3') set({ coupleTwo : undefined })
    },

    removeAllCouplesZone: () => set({
        coupleOne: undefined,
        coupleTwo: undefined
    })

    // getCouplesNotAssigned: () => get().orderedCouples.filter(couple => couple.asignado === false)

})

