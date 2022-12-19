import React, {FC} from 'react';
import {Button} from "antd";
// import {SearchOutlined} from "@ant-design/icons";
import "./style.scss";

interface IProps {
    totalCount?: number,
    onCreate: () => void,
    isCreate: boolean,
}

const TableHeader: FC<IProps> = ({totalCount, onCreate, isCreate}) => (
    <div className='table-header'>
        <div className='content'>
            <div className='item total-count'>Ընդհանուր քանակը` {totalCount || 0}</div>
            {isCreate && <Button className='item add' onClick={() => onCreate()}>+ Ավելացնել</Button>}
            {/*<Input prefix={<SearchOutlined />} placeholder='Փնտրել' className='item' />*/}
        </div>
    </div>
)

export default TableHeader;