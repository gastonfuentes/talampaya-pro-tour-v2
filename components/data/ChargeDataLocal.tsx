'use client'


import { Couple, useCoupleStore } from "@/store/couples.store";
import { useZonesBoundStore } from "@/store/zones";
import { Gender } from "@/store/zones/gender.slice";


/* interface Props {
    pareja: Couple
} */

interface Props {
    parejas: Couple[]
    generos: Gender[]
}

export const ChargeDataLocal = ({ parejas, generos }: Props) => {


    /*  const addCouples = useCoupleStore((state) => state.addCouples); */
    /* const addCouple = useCoupleStore((state) => state.addCouple);
    addCouple(pareja.id, pareja.name1, pareja.name2, pareja.created_at, pareja.last_name1, pareja.last_name2) */

    const addCouples = useCoupleStore((state) => state.addCouples)
    addCouples(parejas)

    const setGenders = useZonesBoundStore((state) => state.setGenders)
    setGenders(generos)

    return (
        <>

        </>
    )
}
