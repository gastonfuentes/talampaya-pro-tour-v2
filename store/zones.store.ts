import { Zone, ZoneName } from "@/interfaces";
import { create } from "zustand";
import { devtools } from "zustand/middleware";



interface ZoneState {

    zoneGenero: number | null;
    setZoneGenero: (id: number) => void

    zones: Record<string, Zone>;

}

export const useZoneStore = create<ZoneState>()(
    devtools(
        (set) => ({

            zoneGenero: 10,

            setZoneGenero: (id: number) => set({ zoneGenero: id }),

            zones: {
                7: { name: 'ZONA B', categoria: 8, genero: 9, partido1: 89, partido2: 34, partido3: 44, pareja1: 34, pareja2: 44, pareja3: 66 }
            },

        }))
)