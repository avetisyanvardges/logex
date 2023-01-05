import {useEffect, useState} from "react";
import {RadioChangeEvent} from 'antd';
import {useDispatch} from "react-redux";
import {fetchCommunitiesRequest} from "state/regions/actions";
import useTypedSelector from 'hooks/useTypedSelector';
import {fetchCommunitiesEndpoint} from 'state/regions/endpoints';
import useParametricSelector from 'hooks/useParametricSelector';

interface IProps {
    selectedCommunityId?: number,
    onClose: () => void,
    onSelectHandler: any,
}

function useContainer({selectedCommunityId, onClose, onSelectHandler}: IProps) {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { communities, communitiesMeta } = useTypedSelector(({regions}) => regions);
    const { endpoint: getCommunitiesEndpoint } = fetchCommunitiesEndpoint;
    const { isLoading: isFetchingCommunities } = useParametricSelector(getCommunitiesEndpoint);
    const [value, setValue] = useState(() => selectedCommunityId || 0);
    const [selectedValue, setSelectedValue] = useState<any>({});

    /**  on save handler  */
    const onSave = () => {
        onSelectHandler({
            community: selectedValue.community_am,
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
        dispatch(fetchCommunitiesRequest({page: String(page), per_page: '8'}));
    }

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onMountHandler, [page]);

    return {
        communities,
        isFetchingCommunities,
        value,
        onChange,
        setPage,
        communitiesMeta,
        page,
        selectedValue,
        onSelect,
        onSave,
    }
}

export default useContainer;