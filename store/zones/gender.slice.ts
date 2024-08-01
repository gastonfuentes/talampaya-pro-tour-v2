import { StateCreator } from "zustand";


export interface Gender {
    id: string;
    gender: string
}


export interface GenderSlice {

    genders: Gender[];

    setGenders: (array: Gender[]) => void

}


export const createGenderSlice: StateCreator<GenderSlice> = (set) => ({

    genders: [],

    setGenders: (array: Gender[]) => set({ genders: array })

})