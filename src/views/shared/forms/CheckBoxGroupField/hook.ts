import {useCallback, useState} from "react";
import {useField} from "formik";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

function useContainer({ name, items }: {name: string, items: any[]}) {
    const [checkAll, setCheckAll] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    const [field, _, helpers] = useField(name);
    const { setValue } = helpers;

    /** Handle change */
    const onChangeHandler = useCallback((value: CheckboxValueType[]) => {
        setValue(value);
    }, []);

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        let allValues = items.reduce((acc: number[] | any, item: {label: string, value: number}) => {
            acc.push(item.value);
            return acc;
        }, []);

        setValue(e.target.checked ? allValues : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return {
        field,
        onChangeHandler,
        checkAll,
        indeterminate,
        onCheckAllChange,
    };
}

export default useContainer;