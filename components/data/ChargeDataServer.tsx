


import { useCoupleStore, Couple } from '@/store/couples.store';
import { createClient } from "@/utils/supabase/client";
import { createClientServer } from "@/utils/supabase/server"
import { ChargeDataLocal } from "./ChargeDataLocal";



export const ChargeDataServer = async () => {


    const supabase = createClientServer()

    const { data: parejas } = await supabase.from('parejas').select()

    console.log(parejas);



    return (
        <>
            {parejas ? <ChargeDataLocal parejas={parejas} /> : <h2>cargandinnn</h2>}
        </>
    )
}
