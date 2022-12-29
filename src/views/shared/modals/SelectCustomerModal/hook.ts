import {useEffect, useState} from "react";
import {RadioChangeEvent} from 'antd';
import {useDispatch} from "react-redux";
import {fetchRegionsRequest} from "state/regions/actions";
import useTypedSelector from 'hooks/useTypedSelector';
import {fetchRegionsEndpoint} from 'state/regions/endpoints';
import useParametricSelector from 'hooks/useParametricSelector';
import {fetchCustomersRequest} from "../../../../state/customers/actions";

interface IProps {
    selectedCustomerId?: number,
    onClose: () => void,
    onSelectHandler: any,
}

function useContainer({selectedCustomerId, onClose, onSelectHandler}: IProps) {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { customers, customersMeta } = useTypedSelector(({customers}) => customers);
    const { endpoint: getRegionsEndpoint } = fetchRegionsEndpoint;
    const { isLoading: isFetchingRegions } = useParametricSelector(getRegionsEndpoint);
    const [value, setValue] = useState(() => selectedCustomerId || 0);
    const [selectedValue, setSelectedValue] = useState<any>({});

    /**  on save handler  */
    const onSave = () => {
        onSelectHandler({
            customer: `${selectedValue.first_name + ' ' + selectedValue.last_name}`,
            id: selectedValue.id
        });
        onClose();
    };

    /**  on change handler  */
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    /**  on select handler  */
    const onSelect = (value: any) => {
        setSelectedValue(value);
    }

    /**  on mount handler  */
    const onMountHandler = () => {
        dispatch(fetchCustomersRequest({page: String(page), per_page: '8'}));
    }

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onMountHandler, [page]);

    return {
        customers,
        isFetchingRegions,
        value,
        onChange,
        setPage,
        customersMeta,
        page,
        selectedValue,
        onSelect,
        onSave,
    }
}

export default useContainer;
