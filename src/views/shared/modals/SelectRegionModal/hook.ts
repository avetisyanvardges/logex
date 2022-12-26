import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchRegionsRequest} from "state/regions/actions";
import useTypedSelector from 'hooks/useTypedSelector';
import {fetchRegionsEndpoint} from 'state/regions/endpoints';
import useParametricSelector from 'hooks/useParametricSelector';
import {RadioChangeEvent} from 'antd';

function useContainer() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { regions, regionsMeta } = useTypedSelector(({regions}) => regions);
    const { endpoint: getRegionsEndpoint } = fetchRegionsEndpoint;
    const { isLoading: isFetchingRegions } = useParametricSelector(getRegionsEndpoint);
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    /**  on mount handler  */
    const onMountHandler = () => {
        dispatch(fetchRegionsRequest({page: String(page), per_page: '8'}));
    }

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onMountHandler, [page]);

    return {
        regions,
        isFetchingRegions,
        value,
        onChange,
    }
}

export default useContainer;