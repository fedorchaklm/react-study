import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import './Pagination.css';

type PaginationPropsType = {
    maxPages: number;
}
const Pagination: FC<PaginationPropsType> = ({maxPages}) => {
    const [query, setQuery] = useSearchParams();
    let page = Number(query.get('page')) || 1;
    const handleOnClickPrev = () => {
        --page;
        if (page < 1) {
            page = 1;
        }
        setQuery({page: page.toString()});
    }

    const handleOnClickNext = () => {
        ++page;
        if (page >= maxPages) {
            page = maxPages;
        }
        setQuery({page: page.toString()});
    }

    return (
            <div className='flex flex-row justify-center items-center gap-2 my-5'>
                <button className='paginationBtn' onClick={handleOnClickPrev}>prev</button>
                <p className='text-2xl'>{page}/{maxPages}</p>
                <button className='paginationBtn' onClick={handleOnClickNext}>next</button>
            </div>
    );
};

export default Pagination;