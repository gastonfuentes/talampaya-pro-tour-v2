
import { createClientServer } from '@/utils/supabase/server'

export const CouplesGrid = async () => {
    const supabase = createClientServer()
    const { data: parejas } = await supabase.from('parejas').select()

    return (
        <div>
            <div>CouplesGrid</div>
            <pre>{JSON.stringify(parejas, null, 2)}</pre>
        </div>
    )
}




