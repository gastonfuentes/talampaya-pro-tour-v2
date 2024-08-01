import { create } from "zustand";
import { createGenderSlice, GenderSlice } from "./gender.slice";
import { devtools } from "zustand/middleware";

type ShareState = GenderSlice;

export const useZonesBoundStore = create<ShareState>()(
    devtools(
        (...a) => ({
            ...createGenderSlice(...a)
        }))
)