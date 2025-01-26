import {createContext} from "react";

type MyContextType = {
    currentValue: number;
    increment: (obj: number) => void;
}
export const MyContext = createContext<MyContextType>({
    currentValue: 0,
    increment: (obj: number) => {
        console.log(obj);
    }
})