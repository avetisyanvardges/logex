import {useParams} from 'react-router-dom';
import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import { isEmpty } from 'lodash';
import {useDispatch} from 'react-redux';
import validationSchema from 'lib/yupLocalised/scheme/users';
import {fetchUserByUpdateRequest} from 'state/admins/actions';
import useMount from 'hooks/useMount';
import useTypedSelector from 'hooks/useTypedSelector';
import {showModal} from 'state/modals/actions';
import {updateUsersEndpoint, createUserEndpoint} from 'state/admins/endpoints';
import useParametricSelector from 'hooks/useParametricSelector';
import {ICreateAndUpdateUserPayload} from 'state/admins/types';

interface ISelectedRegion { region?: string, id?: number }

function useContainer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {endpoint: updateEndpoint} = updateUsersEndpoint(id || '');
    const {endpoint: createEndpoint} = createUserEndpoint;
    const {isLoading: updateLoading} = useParametricSelector(updateEndpoint);
    const {isLoading: createLoading} = useParametricSelector(createEndpoint);
    const [selectedRegion, setSelectedRegion] = useState<ISelectedRegion>({});
    const { userByUpdate } = useTypedSelector(({admins}) => admins);

    /**  Formik handleSubmit  */
    const onSubmit = (values: ICreateAndUpdateUserPayload) => {
        if(id) {
            // dispatch(updateCommunity({community: values, id}))
        } else {
            // dispatch(createCommunity(values));
        }
    };

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            role_id: '',
            first_name: '',
            last_name: '',
            phone: '',
            region_id: '',
            community_id: '',
            address: '',
        },
        validationSchema,
        // initialErrors: {
        //     name: createError?.message || updateError?.message,
        // },
        onSubmit,
    });

    /** open modal for select region  */
    const onSelectHandler = (region: ISelectedRegion) => {
        setSelectedRegion(region);
        if(isEmpty(region)) return;
        formik.setValues({
            ...formik.values,
            region_id: String(region.id),
        })
    };

    /** open modal for select region  */
    const openSelectRegionModal = (region?: ISelectedRegion): void => {
        dispatch(showModal({
            modalType: 'SELECT_REGION_MODAL',
            modalProps: {
                onSelectHandler,
                selectedRegionId: selectedRegion?.id,
            }
        }))
    };

    /**  onCommunityUpdateHandler  */
    const onCommunityUpdateHandler = () => {
        // if(!id || isEmpty(communityById)) return;
        // const { community_am, community_ru, community_en, region } = communityById;
        // setSelectedRegion(region);
        // formik.setValues({first_name, last_name, community_en, region_id: region?.id});
    };

    /**  on params update handler  */
    const onMountHandler = () => {
        formik.resetForm();
        if(!id) return;
        dispatch(fetchUserByUpdateRequest(id));
    };

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMount(onMountHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(onCommunityUpdateHandler, [communityById]);

    return {
        id,
        formik,
        openSelectRegionModal,
        selectedRegion,
        loading: updateLoading || createLoading,
    }
}

export default useContainer;