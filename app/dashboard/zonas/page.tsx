import { createClientServer } from '@/utils/supabase/server'

export default async function ZonasPage() {
    const supabase = createClientServer()
    const { data: notes } = await supabase.from('pareja').select()
    return (
        <div>
            <h1>Hello ZonasPage</h1>
            <pre>{JSON.stringify(notes, null, 2)}</pre>
        </div>
    );
}

