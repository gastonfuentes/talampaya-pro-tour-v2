import { createClientServer } from '@/utils/supabase/server'
import { GenderSelect } from './GenderSelect'



export const GenderGrid = async () => {
    const supabase = createClientServer()
    const { data: generos } = await supabase.from('generos').select(`id, gender`)

    return (
        <div>
            <div>Gender grid</div>

            {generos ? <GenderSelect generos={generos} /> : ''}


        </div>
    )
}
