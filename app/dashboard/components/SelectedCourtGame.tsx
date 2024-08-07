'use client'

import { ZoneCourts } from "@/interfaces"
import { useZonesBoundStore } from "@/store/zones"


interface Props {
    courts: ZoneCourts[],
    partido: number
}


export const SelectedCourtGame = ({ courts, partido }: Props) => {


    const setCourtGame = useZonesBoundStore(state => state.setCourtGame)


    const onChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        const court = e.currentTarget.value
        setCourtGame(partido, parseInt(court))
    }


    return (

        <select onChange={onChangeOptions} id="zoneNames" className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value=""> </option>

            {courts?.map(court => (

                <option value={court}>{court}</option>

            ))}


        </select>

    )
}
