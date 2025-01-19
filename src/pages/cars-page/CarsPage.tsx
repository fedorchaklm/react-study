import {CarsList} from "../../components/cars-list/CarsList.tsx";
import {Link} from "react-router-dom";

export const CarsPage = () => {
    return (
        <>
            <Link className='bg-black w-fit text-white px-2 py-2 text-2xl hover:text-amber-200 mt-2' to={'/carts/create'}>
                <button>Add new car</button>
            </Link>
            <CarsList/>
        </>
    )
}