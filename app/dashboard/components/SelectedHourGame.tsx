'use client'

import { ZoneHours } from "@/interfaces"
import { useZonesBoundStore } from "@/store/zones"


interface Props {
    hours: ZoneHours[],
    partido: number
}


export const SelectedHourGame = ({ hours, partido }: Props) => {


    const setHourGame = useZonesBoundStore(state => state.setHourGame)


    const onChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        const hour = e.currentTarget.value
        setHourGame(partido, hour)

    }


    return (

        <select onChange={onChangeOptions} id="zoneNames" className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value=""> </option>

            {hours?.map(hour => (

                <option value={hour}>{hour}</option>

            ))}


        </select>

    )
}
