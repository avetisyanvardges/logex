import React from "react";
import { Form, Input, InputNumber } from "antd";
import {IRegion} from "state/regions/types";
import InputFiled from "views/shared/forms/InputField";

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: IRegion;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
 }) => {
    const inputNode = inputType === 'number' ? InputNumber : Input;

    return (
        <td {...restProps}>
            {editing ? (<InputFiled name={dataIndex} type={inputType} asComponent={inputNode} />) : (children)}
        </td>
    );
};

export default EditableCell;