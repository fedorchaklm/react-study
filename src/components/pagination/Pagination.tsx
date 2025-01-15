import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import './Pagination.css';

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
        <div className='flex flex-row justify-center gap-2'>
            <button className='paginationBtn' onClick={handleOnClickPrev}>prev</button>
            <button className='paginationBtn' onClick={handleOnClickNext}>next</button>
        </div>
    );
};

export default Pagination;