'use client'

import { ZoneCourts } from "@/interfaces"
import { GamesSet } from "@/interfaces/game.interface"
import { useZonesBoundStore } from "@/store/zones"


interface Props {
    gamesSet: GamesSet[],
    partido: number,
    pareja: number,
    set: number
}


export const SelectedGamesSet = ({ gamesSet, partido, pareja, set }: Props) => {


    const setGamesSet = useZonesBoundStore(state => state.setGamesSet)


    const onChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        const game = e.currentTarget.value
        setGamesSet(partido, pareja, set, parseInt(game))
    }


    return (

        <select onChange={onChangeOptions} id="zoneNames" className="bg-gray-50 border border-gray-300 text-blue-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value=""> </option>

            {gamesSet?.map(game => (

                <option key={game} value={game}>{game}</option>

            ))}


        </select>

    )
}
