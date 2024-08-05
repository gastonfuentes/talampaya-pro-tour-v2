'use client'


import { useAsyncStore } from "@/app/hooks/useAsyncStore";
import { useZonesBoundStore } from "@/store/zones";
import { Category } from "@/store/zones/category.slice";
import { Couple } from "@/store/zones/couple.slice";
import { Gender } from "@/store/zones/gender.slice";


/* interface Props {
    pareja: Couple
} */

interface Props {
    parejas: Couple[]
    generos: Gender[]
    categories: Category[]
}

export const ChargeDataLocal = ({ parejas, generos, categories }: Props) => {


    console.log('desde carga local');


    /*  const addCouples = useCoupleStore((state) => state.addCouples); */
    /* const addCouple = useCoupleStore((state) => state.addCouple);
    addCouple(pareja.id, pareja.name1, pareja.name2, pareja.created_at, pareja.last_name1, pareja.last_name2) */

    const setGenders = useZonesBoundStore((state) => state.setGenders)
    setGenders(generos)

    const setCategories = useZonesBoundStore((state) => state.setCategories)
    setCategories(categories)

    const setCouples = useZonesBoundStore((state) => state.setCouples)
    setCouples(parejas)



    return (
        <>

        </>
    )
}
