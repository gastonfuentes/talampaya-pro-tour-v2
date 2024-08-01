'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface Category {
    name: string;
    id: string
}

interface Props {
    categories: Category[]
}

export const CategoriSelect = ({ categories }: Props) => {


    console.log(categories);

    return (


        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categorias" />
            </SelectTrigger>
            <SelectContent>
                {
                    categories.map(category => (

                        <SelectItem value={category.name} key={category.id}>{category.name}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>


    )
}