'use client'

import { ZoneDays } from "@/interfaces"
import { useZonesBoundStore } from "@/store/zones"


interface Props {
    dias: ZoneDays[],
    partido: number
}


export const SelectedDayGame = ({ dias, partido }: Props) => {


    const setDayGame = useZonesBoundStore(state => state.setDayGame)


    const onChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        const day = e.currentTarget.value
        setDayGame(partido, day)

    }


    return (

        <select onChange={onChangeOptions} id="zoneNames" className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            {dias?.map(dia => (

                <option value={dia}>{dia}</option>

            ))}


        </select>

    )
}
