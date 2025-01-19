import {ICar} from "../../models/ICar.ts";
import {FC} from "react";

type CarProps = {
    car: ICar;
}

export const Car:FC<CarProps> = ({car}) => {
    return (
        <div className='text-center'>
            {car.brand}, {car.year}, {car.price}$
        </div>
    )
}