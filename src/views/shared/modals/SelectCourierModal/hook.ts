import {useEffect, useState} from "react";
import {RadioChangeEvent} from 'antd';
import {useDispatch} from "react-redux";
import useTypedSelector from 'hooks/useTypedSelector';
import {fetchRegionsEndpoint} from 'state/regions/endpoints';
import useParametricSelector from 'hooks/useParametricSelector';
import {fetchCouriersRequest, fetchUserByUpdateRequest} from "../../../../state/admins/actions";

interface IProps {
    selectedCustomerId?: number,
    onClose: () => void,
    onSelectHandler: any,
}

function useContainer({selectedCustomerId, onClose, onSelectHandler}: IProps) {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { users, usersMeta } = useTypedSelector(({admins}) => admins);
    const { endpoint: getRegionsEndpoint } = fetchRegionsEndpoint;
    const { isLoading: isFetchingRegions } = useParametricSelector(getRegionsEndpoint);
    const [value, setValue] = useState(() => selectedCustomerId || 0);
    const [selectedValue, setSelectedValue] = useState<any>({});

    // TODO - on save handler
    const onSave = () => {
        dispatch(fetchUserByUpdateRequest(selectedValue.id, (customer) => {
            onSelectHandler({
                courier: customer,
                id: selectedValue.id
            });
        }));
        onClose();

    };

    // TODO - on change handler
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    // TODO - on select handler
    const onSelect = (value: any) => {
        setSelectedValue(value);
    }

    // TODO - on mount handler
    const onMountHandler = () => {
        dispatch(fetchCouriersRequest({page: String(page), per_page: '8'}));
    }

    // TODO - Lifecycle
    useEffect(onMountHandler, [page]);

    return {
        users,
        usersMeta,
        isFetchingRegions,
        value,
        onChange,
        setPage,
        page,
        selectedValue,
        onSelect,
        onSave,
    };
}

export default useContainer;
