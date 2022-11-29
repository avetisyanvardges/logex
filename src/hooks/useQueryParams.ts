import {useEffect, useState} from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(() => searchParams.get('page') || '1');

    const queryParams = {
        page: !isNaN(+page) ? page : '1',
    }

    const handleChangeParams = (currentPage = 1) => {
        setPage(String(currentPage));
    };

    useEffect(() => {
        setSearchParams(`?${createSearchParams(queryParams).toString()}`);
    }, [page]);

    return {
        page,
        params: {...queryParams, per_page: '5'},
        handleChangeParams,
    }
};

export default useQueryParams;