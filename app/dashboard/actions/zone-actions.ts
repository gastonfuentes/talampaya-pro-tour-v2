'use server';

import { Game } from "@/interfaces/game.interface";
import { useZonesBoundStore } from "@/store/zones";
import { createClientServer } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { MouseEventHandler } from "react";


export const addZone = async (game1: Game): Promise<any> => {

    console.log('desde zone actions');
    console.log({ game1 });


    const supabase = createClientServer()

    const { error } = await supabase.from('parejas').insert({
        /* name1: name1,
        last_name1: last_name1,
        name2: name2,
        last_name2: last_name2 */
    });

    if (error) {
        console.log(error.message);

        return redirect("/login?message=No se pudo cargar la pareja");
    }

    revalidatePath('/dashboard')

    /* return redirect("/dashboard/main"); */

    return { message: 'Succes' }

}