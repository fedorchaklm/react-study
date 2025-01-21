import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsService} from "../../services/cars.api.service.ts";

type DataProps = Omit<ICar, 'id'>

export const CreateCartForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}, reset} = useForm<DataProps>({
        mode: "onChange", resolver: joiResolver(carValidator)
    });

    const customerSubmit = async (data: DataProps) => {
        await carsService.createCar(data);
        reset();
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
                <button className='text-xl bg-black text-white px-2 py-2 rounded' type='submit'
                        disabled={!isValid}>create
                </button>
            </form>

        </div>
    )
}