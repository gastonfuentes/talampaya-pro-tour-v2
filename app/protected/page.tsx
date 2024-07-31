'use client'

import { Couple, useCoupleStore } from "@/store/couples.store";
import { createClientServer } from "@/utils/supabase/server";
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedPage() {
  /* const supabase = createClientServer(); */
  /*  const supabase = createClient; */

  /*   const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return redirect("/login");
    } */

  /*   const { data: categorias, error } = await supabase.from('ganero_categorias').select(`*, categorias (category)`).eq('genero_id', 10);
  
    console.log(categorias); */

  /*  const couple: Couple = { id: 'asas', firstName1: 'gasti', lastName1: 'fuentesss', lastName2: 'matii', firstName2: 'cooor' } */

  const addCouple = useCoupleStore(state => state.addCouple)
  /* const couples = useCoupleStore(state => state.couples) */

  useEffect(() => {
    addCouple('fafa', 'asdas', 'asdads', 'adsadsa', 'daleeeeee')
  }, [])




  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-200 text-center">
          This is a protected page that you can only see as an authenticated
          user ggjj kjkjkkkkk
        </div>
      </div>
    </div>
  );
}
