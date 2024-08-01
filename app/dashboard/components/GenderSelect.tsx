'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface Genero {
    gender: string;
    id: number
}

interface Props {
    generos: Genero[]
}

export const GenderSelect = ({ generos }: Props) => {


    console.log(generos);

    return (


        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                {
                    generos.map(genero => (

                        <SelectItem value={genero.gender} key={genero.id}>{genero.gender}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>


    )
}
