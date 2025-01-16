import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import './Pagination.css';

type PaginationPropsType = {
    maxPages: number;
}
const Pagination: FC<PaginationPropsType> = ({maxPages}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = Number(query.get('page'));

    const handleOnClickPrev = () => {
        const newPageValue = currentPage - 1;
        setQuery({page: newPageValue < 1 ? '1' : newPageValue.toString()});
    }

    const handleOnClickNext = () => {
        const newPageValue = currentPage + 1;
        setQuery({page: newPageValue >= maxPages ? maxPages.toString() : newPageValue.toString()});
    }

    return (
        <div className='flex flex-row justify-center items-center gap-2 my-5'>
            <button className={currentPage <= 1 ? 'disabledPaginationBtn' : 'paginationBtn'} onClick={handleOnClickPrev}>prev
            </button>
            <p className='text-2xl'>{currentPage}/{maxPages}</p>
            <button className={currentPage >= maxPages ? 'disabledPaginationBtn' : 'paginationBtn'}
                    onClick={handleOnClickNext}>next
            </button>
        </div>
    );
};

export default Pagination;