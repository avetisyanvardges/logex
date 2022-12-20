import {useParams} from 'react-router-dom';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import validationSchema from 'lib/yupLocalised/scheme/community';
import {ICreateAndUpdateRolePayload} from 'state/roles/types';
import {createRole, updateRole} from 'state/roles/actions';

function useContainer() {
    const { id } = useParams();
    const dispatch = useDispatch();

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

    return {
        id,
        formik,
    }
}

export default useContainer;