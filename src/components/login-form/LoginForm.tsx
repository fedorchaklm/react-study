import {useForm} from "react-hook-form";
import {login} from "../../services/api.services.ts";
import {ILoginData} from "../../models/ILoginData.ts";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators/loginValidator.ts";
import './LoginForm.css';

export const LoginForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}, reset} = useForm<ILoginData>({
        mode: "all", resolver: joiResolver(loginValidator)
    })

    console.log('>', { errors, isValid});

    const navigate = useNavigate();

    const customerSubmit = async (data: ILoginData) => {
        await login(data);
        reset();
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit(customerSubmit)} className='flex flex-col items-center gap-2 w-96 m-auto py-8 bg-white rounded-2xl'>
            {/*<legend className='text-3xl'>Login</legend>*/}
            <label htmlFor='username'>Enter your username</label>
            <input className='border-2 border-black' id='username' type='text' {...register('username')} autoComplete={'on'}/>
            <div>{errors.username && errors.username.message}</div>
            <label htmlFor='password'>Enter your password</label>
            <input className='border-2 border-black' id='password' type='password' {...register('password')} autoComplete={'on'}/>
            <div>{errors.password && errors.password.message}</div>
            {/*<label htmlFor='expiresInMins'>Enter when you token will expire. In mins</label>*/}
            {/*<input className='border-2 border-black' id='expiresInMins' type='number' {...register('expiresInMins')}/>*/}
            {/*<div>{errors.expiresInMins && errors.expiresInMins.message}</div>*/}
            <button className={isValid ? 'btn' : 'btn cursor-not-allowed hover:text-amber-200'} type="submit" disabled={!isValid}>Login</button>
        </form>
    )
}