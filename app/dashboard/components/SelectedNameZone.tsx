'use client'

import { ZoneName } from "@/interfaces"
import { useZonesBoundStore } from "@/store/zones"


interface Props {
    nameZones: ZoneName[]
    disabled: boolean
}


export const SelectedNameZone = ({ nameZones, disabled }: Props) => {


    const setNameZone = useZonesBoundStore(state => state.setNameZone)

    const onChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        const nameZone = e.currentTarget.value
        setNameZone(nameZone)

    }


    return (

        <select disabled={disabled} onChange={onChangeOptions} id="zoneNames" className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            {nameZones?.map(name => (

                <option key={name} value={name}>{name}</option>

            ))}


        </select>

    )
}
