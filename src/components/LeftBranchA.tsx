import {useContext} from "react";
import {MyContext} from "../context/MyContext.ts";

export const LeftBranchA = () => {
    const {currentValue, increment} = useContext(MyContext);

    return (
        <div>
            Left branch A
            <button onClick={() => increment(currentValue) } className='border-2 px-4'>Click</button>
        </div>
    )
}