import './App.css'
import {RightBranch} from "./components/RightBranch.tsx";
import {LeftBranch} from "./components/LeftBranch.tsx";
import {MyContext} from "./context/MyContext.ts";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <MyContext.Provider value={{
            currentValue: counter,
            increment: (obj: number) => {
                setCounter(++obj);
            }
        }}>
            <LeftBranch/>
            <hr/>
            <RightBranch/>
        </MyContext.Provider>
    )
}

export default App
