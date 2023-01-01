import {useCallback, useState} from "react";
import {useField} from "formik";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import useTypedSelector from "hooks/useTypedSelector";


function useContainer({ name, items, formikPermissions }: {name: string, items: any[],formikPermissions: string[]}) {
    const {permissions} = useTypedSelector(({roles}) => roles);
    const [checkAll, setCheckAll] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    const [field, , helpers] = useField(name);
    // const [disabledStatus,setDisabledStatus] = useState<any>({})
    const [updateState, setUpdateState] = useState(false)
    const {setValue} = helpers;

    /** Handle change */
    const onChangeHandler = useCallback((value: CheckboxValueType[]) => {
        setValue(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        let allValues = Object.values(items).reduce((acc: number[] | any, arr: { label: string, value: number }[]) => {
            arr.map((item) => {
                acc.push(item.value);
            });
            return acc;
        }, []);
        setValue(e.target.checked ? allValues : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const getDisabledValue = (arg: any) => {
        let result = true;
        arg.map((item: any) => {
            if(formikPermissions?.includes(item.value)) result = false;
        })
        return result;
    }

    return {
        field,
        onChangeHandler,
        checkAll,
        indeterminate,
        getDisabledValue,
        onCheckAllChange,
    };
}

export default useContainer;
