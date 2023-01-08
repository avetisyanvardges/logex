import React, {useEffect, useMemo} from "react";
import {IPagePropsPermissions} from 'state/types';
import {useNavigate} from "react-router-dom";
import useTypedSelector from "../../hooks/useTypedSelector";
import useMount from "../../hooks/useMount";
import {useDispatch} from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";
import TableOperations from "../shared/TableOperations";
import {deleteParcel, fetchParcelRequest} from "../../state/parcel/actions";
import {IParcel} from "../../state/parcel/types";
import {fetchParcelsEndpoint} from "../../state/parcel/endpoints";
import useParametricSelector from "../../hooks/useParametricSelector";

function useContainer({edit, remove}: IPagePropsPermissions) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {page, params, handleChangeParams} = useQueryParams();
    const {endpoint: getParcelEndpoint} = fetchParcelsEndpoint;
    const {parcel, parcelMeta} = useTypedSelector(({parcels}) => parcels);
    const {isLoading: isFetchingParcel} = useParametricSelector(getParcelEndpoint);

    // TODO - create parcel
    const handleCreateParcel = () => {
        navigate(`/parcel/create`);
    }

    // TODO - update parcel
    const handleUpdateParcel = ({id}: { id: number }) => {
        navigate(`/parcel/update/${id}`);
    }

    // TODO - delete parcel
    const handleDeleteParcel = (id: string) => {
        dispatch(deleteParcel({params, id}))
    }

    // TODO - handle params update lifecycle
    const onUpdateHandler = () => {
        dispatch(fetchParcelRequest(params));
    }

    // TODO - mount handler
    const onMountHandler = () => {
        dispatch(fetchParcelRequest(params));
    }

    // TODO - Lifecycle
    useEffect(onUpdateHandler, [page]);
    useMount(onMountHandler);

    // TODO - Table columns
    const columns = useMemo(() => (
        [
            {
                title: 'Parcel name',
                dataIndex: 'name',
                width: '50%',
            },
            {
                title: 'Operations',
                width: '50%',
                dataIndex: 'operation',
                render: (_: any, record: IParcel) =>
                    <TableOperations
                        isEdit={edit}
                        isDelete={remove}
                        record={record}
                        handleEdit={handleUpdateParcel}
                        handleDelete={handleDeleteParcel}
                    />
            },
        ]
    ), [parcel]);

    return {handleCreateParcel, parcel, parcelMeta, columns, isFetchingParcel, params, page, handleChangeParams};
}

export default useContainer;
