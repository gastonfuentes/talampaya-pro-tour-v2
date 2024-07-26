'use server';

import { createClientServer } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addCouple = async (formData: FormData) => {

    const name1 = formData.get("name1") as string;
    const last_name1 = formData.get("last_name1") as string;
    const name2 = formData.get("name2") as string;
    const last_name2 = formData.get("last_name2") as string;

    const supabase = createClientServer();

    const { error } = await supabase.from('pareja').insert({
        name1: name1,
        last_name1: last_name1,
        name2: name2,
        last_name2: last_name2
    });

    if (error) {
        console.log(error.message);

        return redirect("/login?message=No se pudo cargar la pareja");
    }

    revalidatePath('/dashboard/zonas')

    /* return redirect("/dashboard/main"); */

    return { message: 'Succes' }

}