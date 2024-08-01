'use client'

import { Button } from "@/components/ui/button";
import { useZoneStore } from "@/store/zones.store";

interface Props {
    gender: string;
    id: number
}



export const GenderButton = ({ gender, id }: Props) => {


    //llamamos al store de zustand
    const setZoneGenero = useZoneStore(state => state.setZoneGenero)


    /*     const onClick = () => {
            setZoneGenero(id)
        } */


    return (


        <Button variant={"default"} onClick={() => setZoneGenero(id)}> {gender} </Button>


    )
}
