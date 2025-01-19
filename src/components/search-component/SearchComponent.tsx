import {useSearchParams} from "react-router-dom";
import {ICar} from "../../models/ICar.ts";
import {FC, FormEvent, useState} from "react";
import {sortedByParameter} from "../../utils/utils.ts";
import {Car} from "../car/Car.tsx";

type SearchComponentProps = {
    cars: Array<ICar>;
}
export const SearchComponent: FC<SearchComponentProps> = ({cars}) => {
    const [query, setQuery] = useSearchParams();
    const search: string = query.get('search') || 'id';
    const [orderType, setOrderType] = useState<string>(search);

    const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
        const select = e.target as HTMLSelectElement;
        setOrderType(select.value);
        setQuery({search: select.value});
    }

    return (
        <div>
            <div className='flex items-center justify-center text-xl gap-2 py-2 px-2'>
                <label>Sort by: </label>
                <select className='border-blue-800 border-2' name='orderType' onChange={handleSelect}>
                    <option value='' disabled>choose</option>
                    <option value='brand'>brand</option>
                    <option value='year'>year</option>
                    <option value='price'>price</option>
                </select>
            </div>
            {cars.sort(sortedByParameter(orderType))
                .map((car) => <Car key={car.id} car={car}/>)}
        </div>
    )
}