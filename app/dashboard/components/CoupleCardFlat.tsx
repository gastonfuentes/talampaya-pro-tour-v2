import { Couple } from "@/store/zones/couple.slice"

interface Props {
    couple: Couple
}

export const CoupleCardFlat = ({ couple }: Props) => {
    return (
        <div
            className="flex flex-row gap-1 p-1 border rounded-xl mb-1 font-light text-xs justify-center bg-white">
            <div> {couple.nombre_completo} </div>
            <span> / </span>
            <div> {couple.nombre_completo_pareja} </div>
        </div>
    )
}
