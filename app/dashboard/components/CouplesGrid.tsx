'use client'

import { useZonesBoundStore } from "@/store/zones"
import { CoupleCard } from "./CoupleCard"

export const CouplesGrid = () => {

    const orderedCouples = useZonesBoundStore((state) => state.orderedCouples)


    return (
        <div
            onDragOver={(event) => {
                event.preventDefault()
                console.log('onDragOver')
            }}
            onDragLeave={() => console.log('onDragLeave')}
            onDrop={() => console.log('onDrop')}
            className='w-1/4'>
            {orderedCouples?.map(couple => (
                <CoupleCard key={couple.id} couple={couple} />
            ))}
        </div>
    )
}
