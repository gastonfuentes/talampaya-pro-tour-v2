'use client'

import { useZoneStore } from '@/store/zones.store';
import { createClient } from '@/utils/supabase/client';
import { createClientServer } from '@/utils/supabase/server'

export default function ZonasPage() {

    const zones = useZoneStore(state => state.zones)

    console.log(zones);

    /* const supabase = createClientServer() */
    /* const supabase = createClient()
    const { data: notes } = await supabase.from('pareja').select() */
    return (
        <div>
            <h1>Hello ZonasPage</h1>
            {/* <pre>{JSON.stringify(notes, null, 2)}</pre> */}
        </div>
    );
}

