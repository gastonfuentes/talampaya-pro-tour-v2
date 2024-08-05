'use client'


import { ZoneGrid } from './ZoneGrid'
import { CouplesGrid } from './CouplesGrid'


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




