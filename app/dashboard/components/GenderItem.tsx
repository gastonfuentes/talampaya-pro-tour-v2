'use client'

import { SelectContent, SelectItem } from "@/components/ui/select"

interface Props {
    gender: string;
    id: number
}


export const GenderItem = ({ gender, id }: Props) => {
    return (
        <SelectContent>
            <SelectItem value="light">{gender}</SelectItem>
        </SelectContent>

    )
}
