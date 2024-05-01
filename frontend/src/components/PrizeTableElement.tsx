import { FaRubleSign } from "react-icons/fa6";

type TPrizeTableElement = {
    index: number,
    value: number
}

export default function PrizeTableElement({
    index, value
}: TPrizeTableElement) {
    return (
        <div className="flex p-0.5 gap-3 m-auto">
            <div className="w-[1.5rem]">
                <h1 className="flex">{index}</h1>
            </div>
            <h1 className="flex gap-1">
                <FaRubleSign className="m-auto"/>
                {value}
            </h1>
        </div>
    )
}