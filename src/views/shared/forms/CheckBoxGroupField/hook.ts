import {useCallback} from "react";
import {useField} from "formik";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

function useContainer({ name }: {name: string}) {
    const [field, _, helpers] = useField(name);
    const { setValue } = helpers;

    /** Handle change */
    const onChangeHandler = useCallback((value: CheckboxValueType[]) => {
        setValue(value);
    }, []);

    return {
        field,
        onChangeHandler,
    };
}

export default useContainer;