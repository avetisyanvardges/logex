import React, { FC } from "react";
import { Form, Input } from 'antd';
import { useField } from "formik";
import { IFormField } from '../types';

const defaultProps: IFormField = {
    label: '',
    name: '',
    placeholder: '',
    formItemClassName: '',
    asComponent: Input,
}

const InputFiled: FC<IFormField> = ({
      label,
      name,
      placeholder,
      formItemClassName,
      asComponent: Component,
      ...props
    }) => {
    const [field, meta] = useField(name);
    const hasError: any = meta.touched && meta.error;
    const Error = hasError ? <div className="error">{meta.error}</div> : undefined;

    return (
        <Form.Item
            className={formItemClassName}
            label={<span>{label}</span>}
            htmlFor={name}
            validateStatus={hasError}
            help={Error}
        >
            <Component id={name} placeholder={placeholder} {...field} {...props} />
        </Form.Item>
    );
};

InputFiled.defaultProps = defaultProps;

export default InputFiled;
