import {FC} from "react";
import {useSearchParams} from "react-router-dom";

type PaginationPropsType = {
    maxPages: number;
}
const Pagination: FC<PaginationPropsType> = ({maxPages}) => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const handleOnClickPrev = () => {
        let page = Number(query.get('page'));
        --page;
        if (page < 1) {
            page = 1;
        }
        setQuery({page: page.toString()});
    }

    const handleOnClickNext = () => {
        let page = Number(query.get('page'));
        ++page;
        if (page >= maxPages) {
            page = maxPages;
        }
        setQuery({page: page.toString()});
    }

    return (
        <div>
            <button onClick={handleOnClickPrev}>prev</button>
            <button onClick={handleOnClickNext}>next</button>
        </div>
    );
};

export default Pagination;