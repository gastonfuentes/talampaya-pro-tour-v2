'use client'

import { DragEvent, useState } from "react"
import { CoupleCard } from "./CoupleCard"
import { Couple } from "@/store/zones/couple.slice"
import { useZonesBoundStore } from "@/store/zones"



export const CouplesGrid = () => {

    const orderedCouples = useZonesBoundStore((state) => state.orderedCouples)

    const draggingCoupleId = useZonesBoundStore(state => state.draggingCoupleId)
    const setMoveCouple = useZonesBoundStore(state => state.setMoveCouple)

    const removeCoupleZone = useZonesBoundStore(state => state.removeCoupleZone)



    const handleDrop = (event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        console.log('caida en el drop de parejas');

        //buscar pareja en el array de parejas designadas y sacarla
        //asignar pareja en el array de parejas ordenadas por categorias
        setMoveCouple(draggingCoupleId!)

        //borrar couple de la zona en su posicion correspondiente
        const position = event.dataTransfer.getData("text");
        console.log(position);
        removeCoupleZone(position)

    }


    return (
        <div
            onDragOver={(event) => {
                event.preventDefault()
                console.log('onDragOver')
            }}
            onDragLeave={() => console.log('onDragLeave')}
            onDrop={handleDrop}
            className='w-1/4'>
            {orderedCouples?.map(couple => (
                <CoupleCard key={couple.id} couple={couple} />
            ))}
        </div>
    )
}
