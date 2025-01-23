import {FC, memo} from "react";

type InfoProps = {
    foo: () => void;
    items: Array<number>
}

export const Info: FC<InfoProps> = memo(( {items}) => {
    console.log('info');

    return (
        <>
            Info
            <p>{items.join(',')}</p>
        </>
    )
})