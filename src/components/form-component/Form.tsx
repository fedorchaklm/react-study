import {useForm} from "react-hook-form";

interface IFormStateProps {
    username: string;
    password: string;
}

export const Form = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormStateProps>({
        mode: "onChange",
    });

    const customerHandlerOnSubmit = (data: IFormStateProps) => {
        console.log(data);

    }
    return (
        <form className='flex justify-center gap-4 mt-2' onSubmit={handleSubmit(customerHandlerOnSubmit)}>
            <label><input className='border-2' type='text' {...register('username', {
                required:
                    {
                        value: true,
                        message: 'invalid username'
                    },
                minLength: {
                    value: 2,
                    message: 'too short username'
                },
                maxLength: {
                    value: 10,
                    message: 'too long username'
                }
            })}/>
            </label>
            <div>{errors.username && errors.username.message}</div>
            <input className='border-2' type='text'  {...register('password')}/>
            <button className={isValid ? 'border-2 px-2 bg-black text-white' : 'cursor-not-allowed border-2 px-2 bg-black text-white '} type='submit' disabled={!isValid}>Send</button>
        </form>
    )
}