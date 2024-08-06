import { Zone, ZoneName } from "@/interfaces";
import { StateCreator } from "zustand";



export interface ZoneSlice {


    zones: Zone[]
    nameZones: ZoneName[]


    getNamesZones: () => ZoneName[]


}

export const createZoneSlice: StateCreator<ZoneSlice> = (set, get) => ({

    zones: [],
    nameZones: ["ZONA A", "ZONA B", "ZONA C", "ZONA D", "ZONA E", "ZONA F", "ZONA G", "ZONA H", "ZONA I", "ZONA J", "ZONA K", "ZONA L", "ZONA M", "ZONA N", "ZONA O", "ZONA P"],



    getNamesZones: () => get().nameZones

})