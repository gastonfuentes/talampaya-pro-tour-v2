'use client'

import { useZonesBoundStore } from "@/store/zones"
import { DragEvent, useEffect, useState } from "react"
import { CoupleCard } from "./CoupleCard"
import { CoupleCardFlat } from "./CoupleCardFlat"
import { SelectedNameZone } from "./SelectedNameZone"



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
                    <tr className="font-bold">
                        <td className="border border-orange-600 w-1/12">N</td>
                        <td className="border border-orange-600 w-3/12"><SelectedNameZone /></td>
                        <td className="border border-orange-600 w-1/12">DIA</td>
                        <td className="border border-orange-600 w-1/12">HORA</td>
                        <td className="border border-orange-600 w-1/12">CLUB</td>
                        <td className="border border-orange-600 w-1/12">CANCHA</td>
                        <td className="border border-orange-600 w-4/12 text-sm">
                            <table>
                                <tbody>
                                    <tr>RESULTADO</tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>F</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="border border-orange-600 w-1/12">1</td>
                        <td className="border border-orange-600 w-3/12">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1 font-bold">A</td>
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
                                        <td className="border-r-2 p-1 font-bold">B</td>
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
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-4/12 text-sm">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
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
                                        <td className="border-r-2 p-1 font-bold">C</td>
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
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-4/12 text-sm">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
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
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-1/12"><input type="text" className="w-10" /></td>
                        <td className="border border-orange-600 w-4/12 text-sm">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                        <td><input type="text" className="w-3/4" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table >

                : null
            }
        </>

    )
}