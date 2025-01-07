import ISimpson from "../../models/ISimpson.ts";
import {FC, PropsWithChildren} from "react";

type CharacterPropsType = PropsWithChildren<{ character: ISimpson }>

const CharacterComponent: FC<CharacterPropsType> = ({character, children}) => {
    return (
        <div className='flex flex-col w-1/2 items-center border-2 border-solid py-5 px-5 mb-5'>
            <h1 className='font-bold'>{character.name} {character.surname}, {character.age} years</h1>
            <p>{children}</p>
            <img src={character.photo} alt={`${character.name} ${character.surname}`}/>
        </div>
    )
}

export default CharacterComponent;