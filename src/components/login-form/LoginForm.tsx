import {useForm} from "react-hook-form";
import {login} from "../../services/api.services.ts";
import {ILoginData} from "../../models/ILoginData.ts";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}, reset} = useForm<ILoginData>({
        mode: "onChange"
    })

    const navigate = useNavigate();

    const customerSubmit = async (data: ILoginData) => {
        await login(data);
        reset();
        navigate('/auth/resources')
    }
    return (
        <form onSubmit={handleSubmit(customerSubmit)} className='flex flex-col items-center gap-2 w-96 m-auto mt-2 bg-white'>
            <label htmlFor='username'>Enter your username</label>
            <input className='border-2 border-amber-200' id='username' type='text' {...register('username')}/>
            <div>{errors.username && errors.username.message}</div>
            <label htmlFor='password'>Enter your password</label>
            <input className='border-2 border-amber-200' id='password' type='password' {...register('password')}/>
            <div>{errors.password && errors.password.message}</div>
            <label htmlFor='expiresInMins'>Enter when you token will expire. In mins</label>
            <input className='border-2 border-amber-200' id='expiresInMins' type='number' {...register('expiresInMins')}/>
            <div>{errors.expiresInMins && errors.expiresInMins.message}</div>
            <button type="submit" disabled={!isValid}>Login</button>
        </form>
    )
}