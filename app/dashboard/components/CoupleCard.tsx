import { Couple } from "@/store/zones/couple.slice"

interface Props {
    couple: Couple
}


export const CoupleCard = ({ couple }: Props) => {
    return (
        <div className="flex flex-row gap-1">
            <div> {couple.nombre_completo} </div>
            <span> / </span>
            <div> {couple.nombre_completo_pareja} </div>
        </div>
    )
}
