'use client'

import { ZoneClub } from "@/interfaces"
import { useZonesBoundStore } from "@/store/zones"


interface Props {
    clubs: ZoneClub[],
    partido: number
}


export const SelectedClubGame = ({ clubs, partido }: Props) => {


    const setClubGame = useZonesBoundStore(state => state.setClubGame)


    const onChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        const club = e.currentTarget.value
        setClubGame(partido, club)

    }


    return (

        <select onChange={onChangeOptions} id="zoneNames" className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value=""> </option>

            {clubs?.map(club => (

                <option value={club}>{club}</option>

            ))}


        </select>

    )
}
