import { AddCouple } from "../components/AddCouple";
import { CategoriesGrid } from "../components/CategoriesGrid";
import { CouplesGrid } from "../components/CouplesGrid";
import { GenderGrid } from "../components/GenderGrid";

export default function CargarZonasPage() {
    return (
        <div>
            <h1>Hello CargarZonasPage</h1>
            <GenderGrid />
            <CategoriesGrid />
            <AddCouple />
            <CouplesGrid />
        </div>
    );
}