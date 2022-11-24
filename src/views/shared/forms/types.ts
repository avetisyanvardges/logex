import {FC} from 'react';

export interface IFormField {
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