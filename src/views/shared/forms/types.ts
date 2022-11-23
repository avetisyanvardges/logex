import {FC, FunctionComponent} from 'react';

export interface IFormField {
    label?: string,
    name: string,
    placeholder?: string,
    formItemClassName?: string,
    asComponent?: FunctionComponent<any>,
}