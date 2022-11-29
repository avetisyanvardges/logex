import React, {FC} from 'react';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import {Popconfirm} from 'antd';
import "./style.scss";

interface IProps {
    record: any,
    handleEdit: (arg: any) => void,
    handleDelete: (arg: any) => void,
}

const TableOperations: FC<IProps> = ({handleEdit, handleDelete, record}) => (
    <div className='tableOperations'>
         <span className='edit' onClick={() => handleEdit(record)}>
              <EditOutlined className='icon' />
         </span>
        <Popconfirm title="Sure to cancel?" onConfirm={() => handleDelete(record.id)}>
             <span className='delete'>
                   <DeleteOutlined className='icon' />
             </span>
        </Popconfirm>
    </div>
);

export default TableOperations;