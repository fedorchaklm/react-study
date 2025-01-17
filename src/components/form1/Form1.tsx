import {FC, FormEvent, useState} from "react";

interface IFormStateProps {
    username: string;
    password: string;
}

export const Form1: FC = () => {
    const [formState, setFormState] = useState<IFormStateProps>({
        username: '',
        password: ''
    });

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            username: formState.username,
            password: formState.password
        };
        console.log(data);
    }

    // const handleUsernameChange = (e: FormEvent) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, username: input.value});
    // }

    // const handlePasswordChange = (e: FormEvent) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, password: input.value});
    // }

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, [input.name]: input.value});
    }

    return (
        <form onSubmit={handleOnSubmit} className='flex justify-center gap-4 mt-2'>
            <input className='border-2' type='text' name='username' value={formState.username}
                   onChange={handleInputChange}/>
            <input className='border-2' type='text' name='password' value={formState.password}
                   onChange={handleInputChange}/>
            <button className='border-2 px-2 bg-black text-white' type='submit'>Send</button>
        </form>
    )
}