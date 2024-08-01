import { create } from "zustand";
import { createGenderSlice, GenderSlice } from "./gender.slice";
import { devtools } from "zustand/middleware";
import { CategorySlice, createCategorySlice } from "./category.slice";

type ShareState = GenderSlice & CategorySlice;

export const useZonesBoundStore = create<ShareState>()(
    devtools(
        (...a) => ({
            ...createGenderSlice(...a),
            ...createCategorySlice(...a)
        }))
)