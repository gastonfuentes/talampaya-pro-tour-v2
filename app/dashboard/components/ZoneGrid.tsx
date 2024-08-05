'use client'

import { useZonesBoundStore } from "@/store/zones"
import { DragEvent, useEffect, useState } from "react"
import { CoupleCard } from "./CoupleCard"



interface Props {
    position: string
}


export const ZoneGrid = ({ position }: Props) => {


    const draggingCoupleId = useZonesBoundStore(state => state.draggingCoupleId)
    const setCoupleOne = useZonesBoundStore(state => state.setCoupleOne)
    const coupleOne = useZonesBoundStore(state => state.coupleOne)


    const [hidratado, setHidratado] = useState(false)

    useEffect(() => {

        setHidratado(true)

    }
        , [])




    /*    const draggingCoupleId = useAsyncStore(useZonesBoundStore, state => state.draggingCoupleId)
       const setCoupleOne = useAsyncStore(useZonesBoundStore, state => state.setCoupleOne)
       const coupleOne = useAsyncStore(useZonesBoundStore, state => state.coupleOne) */



    const handleOver = (event: DragEvent<HTMLTableCellElement>) => {
        event.preventDefault();
        console.log('desde la zona rey');
    }

    const handleDrop = (event: DragEvent<HTMLTableCellElement>) => {
        event.preventDefault();
        setCoupleOne!(draggingCoupleId!)
    }




    return (

        <>
            {hidratado ? < table className="w-full border bg-slate-300 text-center " >
                <tbody>
                    <tr className="font-bold">
                        <td className="border border-orange-600 w-1/12">N</td>
                        <td className="border border-orange-600 w-3/12"><input type="text" /></td>
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
                                        <td className="border-r-2 p-1">A</td>
                                        <td
                                            className="w-full bg-slate-100"
                                            onDragOver={handleOver}
                                            onDrop={handleDrop}
                                        >
                                            {coupleOne ? <CoupleCard couple={coupleOne} /> : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border-r-2 p-1">B</td>
                                        <td>FANTASMA LA VALERIA</td>
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
