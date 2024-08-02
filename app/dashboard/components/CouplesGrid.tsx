'use client'


import { useZonesBoundStore } from '@/store/zones'
import { CategoriSelect } from './CategoriSelect'
import { CoupleCard } from './CoupleCard'


export const CouplesGrid = () => {


    /*   const orderedCategories = useZonesBoundStore((state) => state.orderedCategories) */

    const orderedCouples = useZonesBoundStore((state) => state.orderedCouples)


    return (
        <div>
            <div>Parejas grid</div>

            {orderedCouples?.map(couple => (
                <CoupleCard key={couple.id} couple={couple} />
            ))}


        </div>
    )
}




