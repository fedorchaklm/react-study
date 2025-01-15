import {FC} from "react";
import {useSearchParams} from "react-router-dom";

type PaginationPropsType = {
    maxPages: number;
}
const PaginationComponent: FC<PaginationPropsType> = ({maxPages}) => {
    const [query, setQuery] = useSearchParams({pg: '1'});

    return (
        <div>
            <button onClick={() => {
                let pg = Number(query.get('pg'));
                --pg;
                if (pg === 0) {
                    pg = 1;
                }
                console.log(pg);
                if (pg) {
                    setQuery({pg: pg.toString()});
                }
            }}>prev
            </button>
            <button onClick={() => {
                let pg = Number(query.get('pg'));
                console.log(pg);
                ++pg;
                if (pg > maxPages) {
                    pg = maxPages;
                }
                if (pg) {
                    setQuery({pg: pg.toString()});
                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;