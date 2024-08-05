import { createClientServer } from "@/utils/supabase/server";
import { CategoriesGrid } from "../components/CategoriesGrid";
import { ChargeZone } from "../components/ChargeZone";
import { GenderGrid } from "../components/GenderGrid";
import { redirect } from "next/navigation";
import { ChargeDataServer } from "@/components/data/ChargeDataServer";


export default async function CargarZonasPage() {

    const supabase = createClientServer();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
        <div>
            <ChargeDataServer />
            <h1>Hello CargarZonasPage</h1>
            <div className="flex flex-row gap-2">
                <GenderGrid />
                <CategoriesGrid />
            </div>
            {/*  <AddCouple /> */}
            <ChargeZone />
        </div>
    );
}