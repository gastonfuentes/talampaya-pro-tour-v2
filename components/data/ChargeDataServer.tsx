


import { createClientServer } from "@/utils/supabase/server"
import { ChargeDataLocal } from "./ChargeDataLocal";



export const ChargeDataServer = async () => {


    const supabase = createClientServer()

    const { data: generos } = await supabase.from('generos').select('id, gender')
    const { data: categorias } = await supabase.from('categoriasTalampaya').select()
    const { data: parejas } = await supabase.from('parejas').select()

    console.log('desde carga server');

    return (
        <>
            {generos && parejas && categorias ? <ChargeDataLocal parejas={parejas} generos={generos} categories={categorias} /> : <h2>cargando informacion</h2>}
        </>
    )
}
