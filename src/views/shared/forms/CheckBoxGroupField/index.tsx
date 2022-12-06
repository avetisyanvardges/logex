import React, { FC } from "react";
import {Checkbox} from 'antd';
import useContainer from './hook';

interface IProps {
    items: any[], name: string, className?: string,
}

const CheckBoxGroupField: FC<IProps> = ({items, name, ...props}) => {
    const { field, onChangeHandler } = useContainer({ name });
    return (
        <Checkbox.Group {...field} {...props} onChange={onChangeHandler}>
            {items.map(({ value, label, ...rest }) => (
                <Checkbox {...rest} key={value} value={value}>
                    {label}
                </Checkbox>
            ))}
        </Checkbox.Group>
    )
}

export default CheckBoxGroupField;
