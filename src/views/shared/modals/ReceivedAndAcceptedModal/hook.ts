import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {isEmpty} from "lodash";
import receivedValidationSchema from "lib/yupLocalised/scheme/received";
import acceptedValidationSchema from "lib/yupLocalised/scheme/accepted";
import {acceptOrderRequest, receivedOrderRequest} from 'state/orders/actions';
import {IParams} from 'state/types';

interface Props { tracking_code: string, params: IParams, title: string }

function useContainer({ tracking_code, params, title }: Props) {
    const dispatch = useDispatch();
    // const { endpoint: createEndpoint } = createRegionEndpoint;
    // const { endpoint: updateEndpoint } = updateRegionEndpoint(String(region?.id));
    // const { isLoading: createLoading } = useParametricSelector(createEndpoint);
    // const { isLoading: updateLoading } = useParametricSelector(updateEndpoint);

    const formData = title === 'Accepted' ? ['sender_give_money', 'sender_take_money'] :
        ['recipient_give_money', 'recipient_take_money'];

    const onSubmit = () => {
        if(isEmpty(title === 'Accepted')) {
            dispatch(acceptOrderRequest({ formData: formik.values, params }))
        }else {
            dispatch(receivedOrderRequest({ formData: formik.values, params }))
        }
    }

    /**  Formik initialization  */
    const formik = useFormik({
        initialValues: { tracking_code, [formData[0]]: '', [formData[1]]: '' },
        validationSchema: title === 'Accepted' ? acceptedValidationSchema : receivedValidationSchema,
        onSubmit,
    });

    console.log(formik.values)

    return {
        formik,
        formData,
        onSubmit,
        loading: false,
    }
}

export default useContainer;
