'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useZonesBoundStore } from "@/store/zones";


interface Category {
    name: string;
    id: string
}

interface Props {
    categories: Category[]
}

export const CategoriSelect = ({ categories }: Props) => {


    const setOrderedCouple = useZonesBoundStore(state => state.setOrderedCouple)
    const removeAllCouplesZone = useZonesBoundStore(state => state.removeAllCouplesZone)



    const onChangeSelect = (value: string) => {
        console.log(value);
        setOrderedCouple(value)
        removeAllCouplesZone()
    }

    return (


        <Select onValueChange={onChangeSelect}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categorias" />
            </SelectTrigger>
            <SelectContent>
                {
                    categories.map(category => (

                        <SelectItem value={category.id} key={category.id}>{category.name}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>


    )
}