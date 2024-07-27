import { createClientServer } from '@/utils/supabase/server'


export const GenderGrid = async () => {
    const supabase = createClientServer()
    const { data: genero } = await supabase.from('generos').select(`id, gender`)

    return (
        <div>
            <div>Gender grid</div>
            <pre>{JSON.stringify(genero, null, 2)}</pre>
        </div>
    )
}
