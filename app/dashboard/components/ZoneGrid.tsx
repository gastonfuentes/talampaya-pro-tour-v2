'use client'

import { useZonesBoundStore } from "@/store/zones"
import { DragEvent, useEffect, useState } from "react"
import { CoupleCard } from "./CoupleCard"
import { CoupleCardFlat } from "./CoupleCardFlat"
import { SelectedNameZone } from "./SelectedNameZone"
import { SelectedDayGame } from "./SelectedDayGame"
import { SelectedHourGame } from "./SelectedHourGame"
import { SelectedClubGame } from "./SelectedClubGame"
import { SelectedCourtGame } from "./SelectedCourtGame"
import { SelectedGamesSet } from "./SelectedGamesSet"
import { CheckboxWinGame } from "./CheckboxWinGame"



interface Props {
    position: string
}


export const ZoneGrid = ({ position }: Props) => {


    const draggingCoupleId = useZonesBoundStore(state => state.draggingCoupleId)
    const coupleOne = useZonesBoundStore(state => state.coupleOne)
    const coupleTwo = useZonesBoundStore(state => state.coupleTwo)
    const coupleThree = useZonesBoundStore(state => state.coupleThree)
    const setCoupleOne = useZonesBoundStore(state => state.setCoupleOne)
    const setCoupleTwo = useZonesBoundStore(state => state.setCoupleTwo)
    const setCoupleThree = useZonesBoundStore(state => state.setCoupleThree)

    const setNewOrderedCouples = useZonesBoundStore(state => state.setNewOrderedCouples)
    const setDesignatedCouples = useZonesBoundStore(state => state.setDesignatedCouples)

    const nameZones = useZonesBoundStore(state => state.nameZones)
    const zoneDays = useZonesBoundStore(state => state.zoneDays)

    const days = useZonesBoundStore(state => state.days)
    const hours = useZonesBoundStore(state => state.hours)
    const clubs = useZonesBoundStore(state => state.clubs)
    const courts = useZonesBoundStore(state => state.courts)
    const gamesSet = useZonesBoundStore(state => state.gamesSet)


    const [hidratado, setHidratado] = useState(false)

    useEffect(() => {

        setHidratado(true)

    }
        , [])



    const handleOver = (event: DragEvent<HTMLTableCellElement>) => {
        event.preventDefault();
        console.log('desde la zona rey');
    }

    const handleDrop = (event: DragEvent<HTMLTableCellElement>) => {
        event.preventDefault();
        setCoupleOne!(draggingCoupleId!);

        //actualiza el array de parejas ordenadas por categoria
        setNewOrderedCouples!(draggingCoupleId!);
        //agrega pareja al array de parejas designadas
        setDesignatedCouples(draggingCoupleId!)
    }

    const handleDropCoupleTwo = (event: DragEvent<HTMLTableCellElement>) => {
        event.preventDefault();


        setCoupleTwo!(draggingCoupleId!);

        //actualiza el array de parejas ordenadas por categoria
        setNewOrderedCouples!(draggingCoupleId!);
        //agrega pareja al array de parejas designadas
        setDesignatedCouples(draggingCoupleId!)
    }

    const handleDropCoupleThree = (event: DragEvent<HTMLTableCellElement>) => {
        event.preventDefault();

        setCoupleThree!(draggingCoupleId!);

        //actualiza el array de parejas ordenadas por categoria
        setNewOrderedCouples!(draggingCoupleId!);
        //agrega pareja al array de parejas designadas
        setDesignatedCouples(draggingCoupleId!)
    }

    const handleStart = (event: DragEvent<HTMLTableCellElement>) => {
        /* event.preventDefault() */
        console.log(event.currentTarget.id);
        event.dataTransfer.setData('text', event.currentTarget.id)

    }




    return (

        <>
            {hidratado ? < table className="w-full border bg-slate-300 text-center " >
                <tbody>
                    <tr className="font-bold text-sm">
                        <td className="border border-orange-600 w-1/12">N</td>
                        <td className="border border-orange-600 w-3/12"><SelectedNameZone nameZones={nameZones} /></td>
                        <td className="border border-orange-600 w-1/12">DIA</td>
                        <td className="border border-orange-600 w-2/12">HORA</td>
                        <td className="border border-orange-600 w-2/12">CLUB</td>
                        <td className="border border-orange-600 w-1/12">CANCHA</td>
                        <td className="border border-orange-600 w-3/12 text-sm">
                            <table className="w-full text-center bg-gray-500">
                                <tbody className="w-full">
                                    {/* <tr className="bg-slate-100">
                                        <td className=""></td>
                                    </tr> */}
                                    <tr className="bg-blue-900">
                                        <td className=" bg-blue-300">1</td>
                                        <td className=" bg-blue-400">2</td>
                                        <td className=" bg-blue-500">3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="border border-orange-600 w-1/12 text-sm">FINAL</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="border border-orange-600 w-1/12">1</td>
                        <td className="border border-orange-600 w-3/12">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1 font-bold text-blue-700">A</td>
                                        <td
                                            className="w-full bg-slate-100"
                                            onDragOver={handleOver}
                                            onDrop={handleDrop}
                                            onDragStart={handleStart}
                                            id="position1"
                                        >
                                            {coupleOne ? <CoupleCard couple={coupleOne} /> : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1 font-bold text-blue-700">B</td>
                                        <td
                                            className="w-full bg-slate-100"
                                            onDragOver={handleOver}
                                            onDrop={handleDropCoupleTwo}
                                            onDragStart={handleStart}
                                            id="position2"
                                        >
                                            {coupleTwo ? <CoupleCard couple={coupleTwo} /> : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="border border-orange-600 w-1/12"><SelectedDayGame dias={days} partido={1} /> </td>
                        <td className="border border-orange-600 w-1/12"><SelectedHourGame hours={hours} partido={1} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedClubGame clubs={clubs} partido={1} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedCourtGame courts={courts} partido={1} /></td>
                        <td className="border border-orange-600 w-4/12 text-sm">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={1} set={1} /></td>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={1} set={2} /></td>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={1} set={3} /></td>

                                    </tr>
                                    <tr>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={1} set={1} /></td>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={1} set={2} /></td>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={1} set={3} /></td>

                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="border border-orange-600 w-1/12 text-sm"><CheckboxWinGame partido={1} /></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="border border-orange-600 w-1/12">2</td>
                        <td className="border border-orange-600 w-3/12">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1 text-gray-400">B</td>
                                        <td
                                            className="w-full bg-slate-100"
                                        /*  onDragOver={handleOver}
                                         onDrop={handleDrop}
                                         onDragStart={handleStart}
                                         id="position1" */
                                        >
                                            {coupleTwo ? <CoupleCardFlat couple={coupleTwo} /> : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1 font-bold text-blue-700">C</td>
                                        <td
                                            className="w-full bg-slate-100"
                                            onDragOver={handleOver}
                                            onDrop={handleDropCoupleThree}
                                            onDragStart={handleStart}
                                            id="position3"
                                        >
                                            {coupleThree ? <CoupleCard couple={coupleThree} /> : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="border border-orange-600 w-1/12"><SelectedDayGame dias={days} partido={2} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedHourGame hours={hours} partido={2} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedClubGame clubs={clubs} partido={2} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedCourtGame courts={courts} partido={2} /></td>
                        <td className="border border-orange-600 w-4/12 text-sm">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={2} set={1} /></td>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={2} set={2} /></td>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={2} set={3} /></td>

                                    </tr>
                                    <tr>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={2} set={1} /></td>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={2} set={2} /></td>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={2} set={3} /></td>

                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="border border-orange-600 w-1/12 text-sm"><CheckboxWinGame partido={2} /></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="border border-orange-600 w-1/12">2</td>
                        <td className="border border-orange-600 w-3/12">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1 text-gray-400">A</td>
                                        <td
                                            className="w-full bg-slate-100"
                                        /*  onDragOver={handleOver}
                                         onDrop={handleDrop}
                                         onDragStart={handleStart}
                                         id="position1" */
                                        >
                                            {coupleOne ? <CoupleCardFlat couple={coupleOne} /> : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1 text-gray-400">C</td>
                                        <td
                                            className="w-full bg-slate-100"
                                        /*  onDragOver={handleOver}
                                         onDrop={handleDropCoupleThree}
                                         onDragStart={handleStart}
                                         id="position3" */
                                        >
                                            {coupleThree ? <CoupleCardFlat couple={coupleThree} /> : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="border border-orange-600 w-1/12"><SelectedDayGame dias={days} partido={3} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedHourGame hours={hours} partido={3} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedClubGame clubs={clubs} partido={3} /></td>
                        <td className="border border-orange-600 w-1/12"><SelectedCourtGame courts={courts} partido={3} /></td>
                        <td className="border border-orange-600 w-4/12 text-sm">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={3} set={1} /></td>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={3} set={2} /></td>
                                        <td className="w-1/4"><SelectedGamesSet gamesSet={gamesSet} pareja={1} partido={3} set={3} /></td>

                                    </tr>
                                    <tr>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={3} set={1} /></td>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={3} set={2} /></td>
                                        <td><SelectedGamesSet gamesSet={gamesSet} pareja={2} partido={3} set={3} /></td>

                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="border border-orange-600 w-1/12 text-sm"><CheckboxWinGame partido={3} /></td>
                    </tr>
                </tbody>
            </table >

                : null
            }
        </>

    )
}
