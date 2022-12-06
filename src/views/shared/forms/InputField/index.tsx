import React, { FC } from "react";
import { Form, Input } from 'antd';
import { useField } from "formik";

interface IFormField {
    label?: string,
        name: string,
        placeholder?: string,
        formItemClassName?: string,
        asComponent?: any,
        props?: any,
        className?: any,
        type?: string,
        bordered?: boolean,
        prefix?: any,
}

const defaultProps: IFormField = {
    label: '',
    name: '',
    placeholder: '',
    formItemClassName: '',
    bordered: true,
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
    const hasError: any = meta.error;
    // const hasError: any = meta.touched && meta.error;
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
