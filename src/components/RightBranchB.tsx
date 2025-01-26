import {useContext} from "react";
import {MyContext} from "../context/MyContext.ts";

export const RightBranchB = () => {
    const {currentValue} = useContext(MyContext);

    return (
        <div>
            Right branch B
            <p>current value is {currentValue}</p>
        </div>
    )
}