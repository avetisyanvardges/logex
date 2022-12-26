import {useParams} from 'react-router-dom';
import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import { isEmpty } from 'lodash';
import {useDispatch} from 'react-redux';
import validationSchema from 'lib/yupLocalised/scheme/community';
import {createRole, updateRole} from 'state/roles/actions';
import {fetchCommunityByIdRequest} from 'state/regions/actions';
import useMount from 'hooks/useMount';
import useTypedSelector from 'hooks/useTypedSelector';
import {IRegion} from 'state/regions/types';
import {showModal} from 'state/modals/actions';

interface ISelectedRegion {
    region_am?: '',
    region_en?: '',
    region_ru?: '',
    id?: number,
}

function useContainer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [selectedRegion, setSelectedRegion] = useState<ISelectedRegion>({});
    const { communityById } = useTypedSelector(({regions}) => regions);

    console.log(selectedRegion, 'selectedRegionId');

    /** open modal for select region  */
    const onSelectHandler = (regionId: ISelectedRegion) => {
        setSelectedRegion(regionId);
    };

    /** open modal for select region  */
    const openSelectRegionModal = (region?: ISelectedRegion): void => {
        dispatch(showModal({
            modalType: 'SELECT_REGION_MODAL',
            modalProps: {
                onSelectHandler
            }
        }))
    }

    /**  Formik handleSubmit  */
    const onSubmit = (values: any) => {
        if(id) {
            dispatch(updateRole({...values, id}));
        } else {
            dispatch(createRole(values));
        }
    };

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            community_am: '',
            community_ru: '',
            community_en: '',
            region_id: '',
        },
        validationSchema,
        // initialErrors: {
        //     name: createError?.message || updateError?.message,
        // },
        onSubmit,
    });

    /**  onCommunityUpdateHandler  */
    const onCommunityUpdateHandler = () => {
        if(!id || isEmpty(communityById)) return;
        const { community_am, community_ru, community_en, region } = communityById;
        formik.setValues({community_am, community_ru, community_en, region_id: region?.id});
    };

    /**  on params update handler  */
    const onMountHandler = () => {
        formik.resetForm();
        if(!id) return;
        dispatch(fetchCommunityByIdRequest(id));
    }

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMount(onMountHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onCommunityUpdateHandler, [communityById]);

    return {
        id,
        formik,
        openSelectRegionModal,
        selectedRegion,
    }
}

export default useContainer;