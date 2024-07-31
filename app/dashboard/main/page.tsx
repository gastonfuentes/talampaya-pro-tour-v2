import { createClientServer } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"


export default async function DashboardMainPage() {
    const supabase = createClientServer();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
        <>
            <div className="w-full">
                <div className="py-6 font-bold bg-purple-200 text-center">
                    This is a protected page that you can only see as an authenticated
                    user
                </div>
                <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                    {/* <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                        <DeployButton />
                        <AuthButton />
                    </div> */}
                </nav>
            </div>
            <h1>soy el dashboard pa</h1>

            {/* probando boton de shadcn */}
            <Button variant={"destructive"} > shadcn </Button>

        </>
    )
}