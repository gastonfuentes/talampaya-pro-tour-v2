import { createClientServer } from '@/utils/supabase/server'
import { GenderButton } from './GenderButton'


export const GenderGrid = async () => {
    const supabase = createClientServer()
    const { data: generos } = await supabase.from('generos').select(`id, gender`)

    return (
        <div>
            <div>Gender grid</div>
            <div className='flex gap-1'>
                {generos?.map(genero => (
                    <GenderButton key={genero.id} gender={genero.gender} id={genero.id} />
                ))}
            </div>
        </div>
    )
}
