import {useForm} from "react-hook-form";

interface IFormStateProps {
    username: string;
    password: string;
}

export const Form = () => {
    const {handleSubmit, register} = useForm<IFormStateProps>();

    const customerHandlerOnSubmit = (data: IFormStateProps) => {
        console.log(data);
    }
    return (
        <form className='flex justify-center gap-4 mt-2' onSubmit={handleSubmit(customerHandlerOnSubmit)}>
            <input className='border-2' type='text' {...register('username')}/>
            <input className='border-2' type='text'  {...register('password')}/>
            <button className='border-2 px-2 bg-black text-white' type='submit'>Send</button>
        </form>
    )
}