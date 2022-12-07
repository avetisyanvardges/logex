import React, { FC } from "react";
import {Checkbox, Divider} from 'antd';
import useContainer from './hook';

interface IProps {
    items: any[], name: string, className?: string,
}

const CheckBoxGroupField: FC<IProps> = ({items, name, ...props}) => {
    const { field, onChangeHandler, checkAll, indeterminate, onCheckAllChange } = useContainer({ name, items });
    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} style={{marginLeft: 10}}>
                Check all
            </Checkbox>
            <Divider />
            <Checkbox.Group {...field} {...props} onChange={onChangeHandler}>
                {items.map(({ value, label, ...rest }) => (
                    <Checkbox {...rest} key={value} value={value}>
                        {label}
                    </Checkbox>
                ))}
            </Checkbox.Group>
        </>
    )
}

export default CheckBoxGroupField;
