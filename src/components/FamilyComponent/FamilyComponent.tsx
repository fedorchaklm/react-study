import simpsons from "../../data/simpsons.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";
import ISimpson from "../../models/ISimpson.ts";

const FamilyComponent = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            {simpsons.map((simpson: ISimpson, index: number) =>
                <CharacterComponent key={index} character={simpson}>{simpson.info}</CharacterComponent>)
            }
        </div>
    )
}

export default FamilyComponent;