import { StateCreator } from "zustand";


export interface Category {
    id: string;
    name: string;
    genero: string;
}


export interface CategorySlice {

    categories: Category[];
    orderedCategories: Category[];

    setCategories: (array: Category[]) => void
    setOrderedCategories: (generoId: string) => void

}


export const createCategorySlice: StateCreator<CategorySlice> = (set, get) => ({

    categories: [],
    orderedCategories: [],

    setCategories: (array: Category[]) => set({ categories: array }),
    setOrderedCategories: (generoId: string) => set({ orderedCategories: get().categories.filter(cate => cate.genero === generoId) })

})