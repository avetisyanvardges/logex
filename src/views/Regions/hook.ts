import {useDispatch} from "react-redux";
import useQueryParams from "hooks/useQueryParams";
import useMount from "hooks/useMount";
import { fetchRegionsRequest } from "state/regions/actions";
import useTypedSelector from 'hooks/useTypedSelector';

function useContainer() {
    const dispatch = useDispatch();
    const { regions, meta } = useTypedSelector(({regions}) => regions);
    const { page, params, handleChangeParams } = useQueryParams();

    const onMountHandler = () => {
        dispatch(fetchRegionsRequest(params));
    }

    useMount(onMountHandler);

    return {
        page,
        regions,
        meta,
        handleChangeParams,
    }
}

export default useContainer;