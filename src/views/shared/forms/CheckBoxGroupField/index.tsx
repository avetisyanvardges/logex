import React, { FC } from "react";
import {Checkbox, Form} from 'antd';
import {useField} from 'formik';

const CheckBoxGroupField: FC<{items: any[], name: string}> = ({items, name, ...props}) => {
    const [field, meta] = useField(name);
    return (
        <Checkbox.Group>
            {items.map(item => (
                <Form.Item name={item.id} key={item.id}>
                    <Checkbox {...props} {...field} >{item.name}</Checkbox>
                </Form.Item>
            ))}
        </Checkbox.Group>
    )
}

export default CheckBoxGroupField;
