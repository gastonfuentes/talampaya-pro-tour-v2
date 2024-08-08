import { useZonesBoundStore } from "@/store/zones";
import { useState } from "react";

interface Props {
    partido: number
}

export const CheckboxWinGame = ({ partido }: Props) => {

    const setCoupleWin = useZonesBoundStore(state => state.setCoupleWin)

    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);

    const handleChangeOne = () => {
        setCheckedOne(true);
        setCheckedTwo(false);
        setCoupleWin(partido, 1)
    };

    const handleChangeTwo = () => {
        setCheckedTwo(true);
        setCheckedOne(false);
        setCoupleWin(partido, 2)
    };

    return (


        <div className="flex flex-col gap-2">
            <input type="checkbox" name="pareja1" id="1" checked={checkedOne} onChange={handleChangeOne} />
            <input type="checkbox" name="pareja2" id="2" checked={checkedTwo} onChange={handleChangeTwo} />
        </div>
    );

}
