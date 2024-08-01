'use client'


import { useZonesBoundStore } from '@/store/zones'
import { GenderSelect } from './GenderSelect'


export const GenderGrid = () => {

    const genders = useZonesBoundStore((state) => state.genders)


    return (
        <div>
            <div>Gender grid</div>

            {genders ? <GenderSelect generos={genders} /> : ''}


        </div>
    )
}
