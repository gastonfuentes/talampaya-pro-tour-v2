'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useZonesBoundStore } from "@/store/zones";
import { Target } from "lucide-react";


interface Genero {
    gender: string;
    id: string
}

interface Props {
    generos: Genero[]
}

export const GenderSelect = ({ generos }: Props) => {


    const setOrderedCategories = useZonesBoundStore(state => state.setOrderedCategories)
    const setEmptyOrderedCouple = useZonesBoundStore(state => state.setEmptyOrderedCouple)
    const removeAllCouplesZone = useZonesBoundStore(state => state.removeAllCouplesZone)



    const onChangeSelect = (value: string) => {
        console.log(value);
        setOrderedCategories(value)
        setEmptyOrderedCouple()
        removeAllCouplesZone()
    }


    return (


        <Select onValueChange={onChangeSelect} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Genero" />
            </SelectTrigger>
            <SelectContent>
                {
                    generos.map(genero => (

                        <SelectItem value={genero.id} key={genero.id}>{genero.gender}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>


    )
}
