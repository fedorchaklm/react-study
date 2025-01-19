import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator.ts";

interface IFormStateProps {
    username: string;
    password: string;
    age: number;
}

export const Form = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormStateProps>({
        mode: "onChange", resolver: joiResolver(userValidator)
    });

    return (
        <form className='flex flex-col items-center gap-2 py-2 border-orange-500 border-2 w-60'
              onSubmit={handleSubmit((data: IFormStateProps) => console.log(data))}>
            <label htmlFor='username'> Enter your username: </label>
            <input id='username' className='border-2' type='text' {...register('username')}/>
            <div>{errors.username && errors.username.message}</div>
            <label htmlFor='password'> Enter your password: </label>
            <input id='password' className='border-2' type='text' {...register('password')}/>
            <div>{errors.password && errors.password.message}</div>
            <label htmlFor='age'> Enter your age: </label>
            <input id='age' className='border-2' type='number' {...register('age')}/>
            <div>{errors.age && errors.age.message}</div>
            <button
                className={isValid ? 'border-2 px-2 bg-black text-white' : 'cursor-not-allowed border-2 px-2 bg-black text-white '}
                type='submit' disabled={!isValid}>Send
            </button>
        </form>
    )
}