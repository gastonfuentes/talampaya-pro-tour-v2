'use client'


import { ZoneGrid } from './ZoneGrid'
import { CouplesGrid } from './CouplesGrid'
import { useZonesBoundStore } from '@/store/zones'


export const ChargeZone = () => {



    return (
        <>
            <div>cargar zonas</div>
            <div className='flex flex-row'>
                <CouplesGrid />
                <ZoneGrid position='cabeza de serie' />
            </div>
        </>
    )
}



