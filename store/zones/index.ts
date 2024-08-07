import { create } from "zustand";
import { createGenderSlice, GenderSlice } from "./gender.slice";
import { devtools } from "zustand/middleware";
import { CategorySlice, createCategorySlice } from "./category.slice";
import { CoupleSlice, createCoupleSlice } from "./couple.slice";
import { createZoneSlice, ZoneSlice } from "./zone.slice";
import { createGameSlice, GameSlice } from "./game.slice";

type ShareState = GenderSlice & CategorySlice & CoupleSlice & ZoneSlice & GameSlice;

export const useZonesBoundStore = create<ShareState>()(
    devtools(
        (...a) => ({
            ...createGenderSlice(...a),
            ...createCategorySlice(...a),
            ...createCoupleSlice(...a),
            ...createZoneSlice(...a),
            ...createGameSlice(...a)
        }))
)