import { useFormik } from "formik";
import validationSchema from "lib/yupLocalised/scheme/signIn";

function useContainer() {
    const onSubmit = () => {
        //
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit,
    });

    return {
        formik,
    }
}

export default useContainer;