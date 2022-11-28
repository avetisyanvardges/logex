import useQueryParams from "hooks/useQueryParams";
import {useDispatch} from "react-redux";
import useMount from "hooks/useMount";
import { fetchRegionsRequest } from "state/concepts/actions";

function useContainer() {
    const dispatch = useDispatch();
    const { page, params, handleChangeParams } = useQueryParams();

    const onMountHandler = () => {
        dispatch(fetchRegionsRequest(params));
    }

    useMount(onMountHandler);

    return {
        page,
        handleChangeParams,
    }
}

export default useContainer;