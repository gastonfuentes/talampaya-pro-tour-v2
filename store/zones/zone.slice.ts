import { Zone, ZoneDays, ZoneName } from "@/interfaces";
import { StateCreator } from "zustand";



export interface ZoneSlice {


    zones: Zone[]
    nameZone: string
    nameZones: ZoneName[]
    zoneDays: ZoneDays[]


    setNameZone: (name: string) => void


}

export const createZoneSlice: StateCreator<ZoneSlice> = (set, get) => ({

    zones: [],
    nameZone: '',
    nameZones: ["ZONA A", "ZONA B", "ZONA C", "ZONA D", "ZONA E", "ZONA F", "ZONA G", "ZONA H", "ZONA I", "ZONA J", "ZONA K", "ZONA L", "ZONA M", "ZONA N", "ZONA O", "ZONA P"],
    zoneDays: ["15", "16", "17", "18"],



    setNameZone: (name: string) => set({ nameZone: name })

})