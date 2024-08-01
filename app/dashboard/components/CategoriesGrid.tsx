import { createClientServer } from "@/utils/supabase/server"


export const CategoriesGrid = async () => {

    const gender: number = 10

    const supabase = createClientServer()


    /* consulta para traer las categorias de acuerdo al genero */
    /* const { data: categorias, error } = await supabase.from('ganero_categorias').select(`*, categorias (category)`).eq('genero_id', gender) */


    const { data: categorias, error } = await supabase.from('categoriasTalampaya').select()


    /* console.log(error?.message); */


    return (
        <div>
            <div>categorias grid</div>
            <pre>{JSON.stringify(categorias, null, 2)}</pre>
        </div>
    )
}
