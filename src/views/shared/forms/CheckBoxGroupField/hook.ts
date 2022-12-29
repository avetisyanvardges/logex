import {useCallback, useState} from "react";
import {useField} from "formik";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import useTypedSelector from "../../../../hooks/useTypedSelector";

function useContainer({ name, items }: {name: string, items: any[]}) {
    const {permissions} = useTypedSelector(({roles}) => roles);
    const [checkAll, setCheckAll] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    const [field, , helpers] = useField(name);
    const { setValue } = helpers;

    /** Handle change */
    const onChangeHandler = useCallback((value: CheckboxValueType[]) => {
        setValue(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        let allValues = Object.values(items).reduce((acc: number[] | any, arr: { all: { label: string, value: number }[], values: number[] }) => {
            arr.all.map((item) => {
                acc.push(item.value);
            });
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
