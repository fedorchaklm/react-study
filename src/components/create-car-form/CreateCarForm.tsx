import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsService} from "../../services/cars.api.service.ts";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const CreateCarForm = () => {
    const navigate = useNavigate();
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<Omit<ICar, 'id'>>({
        mode: "onChange", resolver: joiResolver(carValidator)
    });

    const customerSubmit = async (data: Omit<ICar, 'id'>) => {
        await carsService.createCar(data);
        toast("Car has been created successfully!");
        navigate('/cars');
    }

    return (
        <div className='flex flex-col items-center border-blue-800 border-2 w-96 mx-auto my-5'>
            <h2 className='text-3xl'>Create a new car</h2>
            <form className='flex flex-col items-center gap-5 my-5'
                  onSubmit={handleSubmit(customerSubmit)}>
                <label htmlFor='brand'>Enter brand of car</label>
                <input className='border-blue-800 border-2' id='brand' type='text' {...register('brand')} />
                <div>{errors.brand && errors.brand.message}</div>
                <label htmlFor='year'>Enter year of car</label>
                <input className='border-blue-800 border-2' id='year' type='number' {...register('year')} />
                <div>{errors.year && errors.year.message}</div>
                <label htmlFor='price'>Enter price of car</label>
                <input className='border-blue-800 border-2' id='price' type='number' {...register('price')} />
                <div>{errors.price && errors.price.message}</div>
                <button className={isValid ? 'btn' : 'btn cursor-not-allowed'} type='submit'
                        disabled={!isValid}>create
                </button>
            </form>
        </div>
    )
}