'use client'


import { Couple, useCoupleStore } from "@/store/couples.store";


/* interface Props {
    pareja: Couple
} */

interface Props {
    parejas: Couple[]
}

export const ChargeDataLocal = ({ parejas }: Props) => {


    /*  const addCouples = useCoupleStore((state) => state.addCouples); */
    /* const addCouple = useCoupleStore((state) => state.addCouple);
    addCouple(pareja.id, pareja.name1, pareja.name2, pareja.created_at, pareja.last_name1, pareja.last_name2) */

    const addCouples = useCoupleStore((state) => state.addCouples)
    addCouples(parejas)

    return (
        <>

        </>
    )
}
