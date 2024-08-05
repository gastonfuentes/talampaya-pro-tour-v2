'use client'

import { useZonesBoundStore } from "@/store/zones"
import { Couple } from "@/store/zones/couple.slice"

interface Props {
    couple: Couple
}


export const CoupleCard = ({ couple }: Props) => {


    const setDraggingCoupleId = useZonesBoundStore(state => state.setDraggingCoupleId)
    const removeDraggingCoupleId = useZonesBoundStore(state => state.removeDraggingCoupleId)


    return (
        <div
            draggable={true}
            onDragStart={() => setDraggingCoupleId(couple.id)}
            onDragEnd={() => removeDraggingCoupleId()}
            className="flex flex-row gap-1 p-1 border rounded-xl mb-1 font-light text-xs justify-center bg-white">
            <div> {couple.nombre_completo} </div>
            <span> / </span>
            <div> {couple.nombre_completo_pareja} </div>
        </div>
    )
}
