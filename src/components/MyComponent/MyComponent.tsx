// import {FC} from "react";
import './MyComponent.css';
import products from "../../data/products.ts";
import IProduct from "../../models/IProduct.ts";
import MyProduct from "../MyProduct/MyProduct.tsx";

const MyComponent = () => {
    return (
        <>
            {
                products.map((product: IProduct, index: number) => <MyProduct product={product} key={index}/>)
            }
        </>
    )
}

export default MyComponent;


// const MyComponent2: FC<IMyComponent> = ({text}) => {
//     return (
//         <h1>Hello, {text} </h1>
//     )
// }

